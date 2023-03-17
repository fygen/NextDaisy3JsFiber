import React from "react";
import Link from "next/link";

export function Navbar({ }) {
    return (
        <nav className="navbar bg-base-100 shadow-md">
            <div className="navbar-start">
                <div className="dropdown shadow-lg">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow-xl bg-base-100 rounded-box w-52">
                        <li ><Link href="/" >Anasayfa</Link></li>
                        <li tabIndex={0}>
                            <p className="justify-between">
                                Ürünler
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </p>
                            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow-2xl bg-base-100 rounded-box w-22">
                                {[
                                    "PULLUKLAR",
                                    "ÇİZEL PULLUKLAR & DİPKAZANLAR",
                                    "KÜLTİVATÖRLER",
                                    "ROTOVATÖRLER",
                                    "DİSKAROLAR",
                                    "TESVİYE MAKİNELERİ",
                                    "DİĞER ÜRÜNLER",
                                ].map((link, ind) => { return <li><Link key={ind} href={link} className="" >{link}</Link></li> })}
                                <li><Link href="/model" >a</Link></li>
                            </ul>
                        </li>
                        <li tabIndex={0}>
                            <p className="justify-between">
                                Kurumsal
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </p>
                            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow-2xl bg-base-100 rounded-box w-70">
                                {
                                    ["HAKKIMIZDA",
                                        "TARİHÇE",
                                        "TEKNOLOJİ",
                                        "İHRACAT",
                                        "İNSAN KAYNAKLARI",
                                        "TANITIM FİLMİ",
                                        "KVKK POLİTİKASI",
                                        "AYDINLATMA METNİ",
                                        "GÜVENLİK KAMERASI AYDINLATMA METNİ",]
                                        .map((link, ind) => { return <li><Link key={ind} href={link} className="" >{link}</Link></li> })
                                }
                            </ul>
                        </li>
                        {
                            [
                                "Bayilerimiz",
                                "Haberler",
                                "Fuarlar & Etkinlikler",
                                "İletişim",
                            ].map((link, ind) => { return <li><Link key={ind} href={link} className="" >{link}</Link></li> })
                        }
                    </ul>
                </div>
                <Link href="#" className="btn btn-ghost normal-case text-xl">HT ALPLER</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="#">Anasayfa</Link></li>
                    <li tabIndex={0}>
                        <p >
                            Kurumsal
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </p>
                        <ul className="menu menu-compact bg-base-100 w-70 p-2 shadow-xl rounded-box">
                            {
                                ["HAKKIMIZDA",
                                    "TARİHÇE",
                                    "TEKNOLOJİ",
                                    "İHRACAT",
                                    "İNSAN KAYNAKLARI",
                                    "TANITIM FİLMİ",
                                    "KVKK POLİTİKASI",
                                    "AYDINLATMA METNİ",
                                    "GÜVENLİK KAMERASI AYDINLATMA METNİ",]
                                    .map((link, ind) => { return <li><Link key={ind} href={link} className="" >{link}</Link></li> })
                            }
                        </ul>
                    </li>
                    <li tabIndex={0}>
                        <p >
                            Ürünlerimiz
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </p>
                        <ul className="menu menu-compact bg-base-100 w-66 p-2 shadow-lg rounded-box">
                            {
                                [
                                    "PULLUKLAR",
                                    "ÇİZEL PULLUKLAR & DİPKAZANLAR",
                                    "KÜLTİVATÖRLER",
                                    "ROTOVATÖRLER",
                                    "DİSKAROLAR",
                                    "TESVİYE MAKİNELERİ",
                                    "DİĞER ÜRÜNLER",
                                ].map((link, ind) => { return <li><Link key={ind} href={link} className="" >{link}</Link></li> })
                            }
                        </ul>
                    </li>
                    {
                        [
                            "Bayilerimiz",
                            "Haberler",
                            "Fuarlar & Etkinlikler",
                            "İletişim",
                        ].map((link, ind) => { return <li><Link key={ind} href={link} className="" >{link}</Link></li> })
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <Link href="#" className="btn">Get started</Link>
            </div>
        </nav>
    );
}
