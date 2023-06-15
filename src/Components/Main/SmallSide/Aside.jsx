import React from 'react';
import SinglePerson from './SinglePerson';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Aside = () => {
    const persons = [
        {
            name:"Hon'ble Minister",
            photo:'https://satkhiratsc.gov.bd/200391/200391_media/website_content/important_persons_photo_1647965216_2022-03-22.jpg',
            title:"Hon'ble Minister, MP",
            detail:'http://service.dte.gov.bd/download/%E0%A6%AE%E0%A6%A8%E0%A7%8D%E0%A6%A4%E0%A7%8D%E0%A6%B0%E0%A6%BF.pdf'
        },
        {
            name:"Hon'ble Deputy Minister            ",
            photo:'https://satkhiratsc.gov.bd/200391/200391_media/website_content/important_persons_photo_1647965224_2022-03-22.jpg',
            title:"Hon'ble Deputy Minister, MP",
            detail:'http://service.dte.gov.bd/download/%E0%A6%89%E0%A6%AA_%E0%A6%AE%E0%A6%A8%E0%A7%8D%E0%A6%A4%E0%A7%8D%E0%A6%B0%E0%A6%BF.pdf'
        },
        {
            name:"Secretary",
            photo:'https://satkhiratsc.gov.bd/200391/200391_media/website_content/important_persons_photo_1647965234_2022-03-22.jpg',
            title:"Secretary,",
            detail:'http://www.tmed.gov.bd/site/page/d3f8d78f-42d5-4667-b062-7ed23174a3f7/%E0%A6%B8%E0%A6%9A%E0%A6%BF%E0%A6%AC-%E0%A6%AE%E0%A6%B9%E0%A7%8B%E0%A6%A6%E0%A7%9F'
        },
        {
            name:"Director General",
            photo:'https://satkhiratsc.gov.bd/200391/200391_media/website_content/important_persons_photo_1685769721_2023-06-03.jpg',
            title:"Director General,",
            detail:'Details'
        },
        {
            name:"Principle",
            photo:'https://satkhiratsc.gov.bd/200391/200391_media/headteacher/Head_1641794572_2022-01-10.png',
            title:"Engr. Md. Moshiur Rahman",
            detail:'Details'
        },
       
    ]
    return (
        <div style={{ marginBottom:'20px'}}>
            <Row>
                {persons.map((person,i)=>{
                    return(<SinglePerson
                    key={i}
                        person={person} />)
                })}
            </Row>
            <Row>
                <div>
                    <h2 className='e-service-header'>e-Service Center</h2>
                    <h2 className='e-service-header'>Connect With Us</h2>
                </div>
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Fsch360%2F%3Fref%3Dembed_page&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                <div className='mt-2 important-link'>
                <h2 className='e-service-header mt-2'>Important Link</h2>
                        <ul>
                            <li style={{
                                backgroundImage:`url(https://satkhiratsc.gov.bd/core_media/themes/responsive_npf/images/bg_block_list.png)`, backgroundRepeat:'no-repeat',
                                backgroundPosition:'left',
                                }}>
                                <a href="">Apply Online Admission</a>
                            </li>
                            <li style={{
                                backgroundImage:`url(https://satkhiratsc.gov.bd/core_media/themes/responsive_npf/images/bg_block_list.png)`, backgroundRepeat:'no-repeat',
                                backgroundPosition:'left',
                                }}>
                                <a href="">Bangladesh Technical Education Board</a>
                            </li>
                            <li style={{
                                backgroundImage:`url(https://satkhiratsc.gov.bd/core_media/themes/responsive_npf/images/bg_block_list.png)`, backgroundRepeat:'no-repeat',
                                backgroundPosition:'left',
                                }}>
                                <a href="">HRMIS</a>
                            </li>
                            <li style={{
                                backgroundImage:`url(https://satkhiratsc.gov.bd/core_media/themes/responsive_npf/images/bg_block_list.png)`, backgroundRepeat:'no-repeat',
                                backgroundPosition:'left',
                                }}>
                                <a href="">Derectoret Of Technical Education</a>
                            </li>
                            <li style={{
                                backgroundImage:`url(https://satkhiratsc.gov.bd/core_media/themes/responsive_npf/images/bg_block_list.png)`, backgroundRepeat:'no-repeat',
                                backgroundPosition:'left',
                                }}>
                                <a href="">কারিগরি ও মাদ্রাসা শিক্ষা বিভাগ</a>
                            </li>
                        </ul>
                </div>
            </Row>
            <Row>
               <div>
               <h2 className='e-service-header mt-2'>Emergency Hotline</h2>
               <img width={'220px'} src='https://satkhiratsc.gov.bd/core_media/themes/responsive_npf/images/National-Helpline.jpg' alt="" />
               </div>
            </Row>
            <Row>
               <div>
               <h2 className='e-service-header mt-2'>Communication to prevent Corona Virus</h2>
               <img width={'220px'} src='https://satkhiratsc.gov.bd/core_media/themes/responsive_npf/images/Corona-Teaser-BD-card-.jpg' alt="" />
               </div>
            </Row>
            <Row>
               <div className='mt-4'>
               <h2 className='e-service-header mt-2'>National Anthem</h2>
               <audio style={{width:'220px'}} controls src="https://satkhiratsc.gov.bd/core_media/themes/responsive_npf/audio/bd_national_anthem.mp3"></audio>
               </div>
            </Row>
            <Row>
               <div className='mt-4'>
               <h2 className='e-service-header mt-2'>What to do to prevent Dengue</h2>
               <img width={'220px'} src='https://satkhiratsc.gov.bd/core_media/themes/responsive_npf/images/dengu.jpg' alt="" />
               </div>
            </Row>
        </div>
    );
};

export default Aside;