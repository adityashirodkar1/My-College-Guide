import { React , useState , useEffect } from 'react'
import Member from './Member'

const style = { 
  display: "flex", 
  flexDirection: "row", 
  justifyContent: "space-evenly", 
  alignItems: "center",
  flexWrap: "wrap",
}

const style2 = { 
  display: "flex", 
  flexDirection: "column", 
  justifyContent: "space-evenly", 
  alignItems: "center"
}

export default function Team(props) {

  return (
    <div id='team' style={style2}>
        <h1>TEAM</h1>

        <div style={style} className="my-4">
            <Member member = {props.cp} post = {"Chairperson"}/>
        </div>
        
        <div style={style} className="my-4">
          {props.vcp.map((member) => {
            return <Member member = {member} post = {"Vice Chairperson"}/>
          })}
        </div>

        <div style={style} className="my-4">
          {props.sec.map((member) => {
            return <Member member = {member} post = {"Secretary"}/>
          })}
        </div>

        <div style={style} className="my-4">
          {props.hof.map((member) => {
            return <Member member = {member} post = {"Head of Finance"}/>
          })}
        </div>

        <div style={style} className="my-4">
          {props.hom.map((member) => {
            return <Member member = {member} post = {"Head of Marketing"}/>
          })}
        </div>

        <div style={style} className="my-4">
          {props.prh.map((member) => {
            return <Member member = {member} post = {"Public Relations Head"}/>
          })}
        </div>

        <div style={style} className="my-4">
          {props.th.map((member) => {
            return <Member member = {member} post = {"Technical Head"}/>
          })}
        </div>

        <div style={style} className="my-4">
          {props.oh.map((member) => {
            return <Member member = {member} post = {"Operations Head"}/>
          })}
        </div>
        
        <div style={style} className="my-4">
          {props.ch.map((member) => {
            return <Member member = {member} post = {"Creative Head"}/>
          })}
        </div>

        <div style={style} className="my-4">
          {props.hos.map((member) => {
            return <Member member = {member} post = {"Head of Subcom"}/>
          })}
        </div>

        
        <h4 className='mt-4'><b>SUBCOMMITTEE</b></h4>
        <div style={style} className="my-4">
          {props.sub.map((member) => {
            return <Member member = {member} post = {"subcom"}/>
          })}
        </div>

    </div>
  )
}
