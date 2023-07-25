import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Description from './Description'
// import { useLocation } from "react-router-dom";
import Schedule from './Schedule'
import Sponsors from './Sponsors';
import ComHeader from './ComHeader';
import Team from './Team';
import ComEvents from './ComEvents';
import ComFooter from './ComFooter';

export default function Committee() {

    // const location = useLocation();
    // const path = location.pathname;

    const [cp, setCp] = useState("initial")
    const [vcp, setVcp] = useState([])
    const [sec, setSec] = useState([])
    const [hof, setHof] = useState([])
    const [hom, setHom] = useState([])
    const [prh, setPrh] = useState([])
    const [th, setTh] = useState([])
    const [oh, setOh] = useState([])
    const [ch, setCh] = useState([])
    const [hos, setHos] = useState([])
    const [sub, setSub] = useState([])

    const [events, setEvents] = useState([])
    const [committee, setCommittee] = useState({})
    const id = useParams();
    const fetchCommittee = async () => {
        const response = await fetch(`http://localhost:5000/api/committees/${id.id}`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const json = await response.json(); // parses JSON response into native JavaScript objects
        setCommittee(json)
        setEvents(json.eve)
        setCp(json.team.chairperson)
        setVcp(json.team.viceChairperson)
        setSec(json.team.secretary)          
        setHof(json.team.headOfFinance)  
        setHom(json.team.headOfMarketing)  
        setPrh(json.team.publicRelationHead)  
        setTh(json.team.technicalHead)  
        setOh(json.team.operationhead)  
        setCh(json.team.creativeHead)  
        setHos(json.team.headOfSubcom)  
        setSub(json.team.subcom)  
    }

    useEffect(() => {
        fetchCommittee()
    })

    return (
        <>
            <div className="container mt-3">
                <ComHeader com = {committee} />
                <hr />
                <Description com={committee} />
                <hr />
                <Schedule com={committee} />
                <hr />
                <ComEvents com = {committee} events = {events}/>
                <hr />
                <Sponsors com={committee} />
                <hr />
                <Team cp = {cp} vcp = {vcp} sec = {sec} hof = {hof} hom = {hom} prh = {prh} th = {th} oh = {oh} ch = {ch} hos = {hos} sub = {sub} />  
            </div>
            <ComFooter />
        </>
    )
}
