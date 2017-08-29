var Data =
{
    intro: "Hello! My name is 'Yasir', I am a 20 year old, computer science student.",
    about_me: "I am interested generally in programimng and working in I.T Industry. I am excellent learner and can easily adopt to new technologies. I am more focused on UX than UI.",
    fav_quote: "Everybody should learn how to program a computer, because it teaches you how to think.",
    fav_quote_cite: "Steve Jobs",
    education: "[Dadabhoy Institute] — [BSCS]	<span class=\"float-right\">[2015] — [...]</span><br/>[Sir Adamjee Institue] — [HSC]	<span class=\"float-right\">[2015]</span><br/>[P.M Public School] — [SSC]	<span class=\"float-right\">[2013]</span>",
    skill1: "HTML",
    skill1_prog: "92",
    skill2: "CSS",
    skill2_prog: "81",
    skill3: "JavaScript",
    skill3_prog: "82",
    address_ifram_src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.4965877354816!2d67.06315291315842!3d24.915147549203628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f16c45ae1a7%3A0xfcdafa80d47ca357!2s1050+Azizabad+Main+Rd%2C+Karachi%2C+Pakistan!5e0!3m2!1sen!2s!4v1503897959214",
    address_text: "<strong>House # 1026/2,</strong><br>Azizabad Block # 02,<br>F.B Area,<br>Karachi<br>Sindh,<br>Pakistan.<br>"
}




function write_to_document(Obj)
{
    document.getElementById("INTRO").innerHTML = Obj.intro;
    document.getElementById("ABOUT-ME").innerHTML = Obj.about_me;
    document.getElementById("FAV-QUOTE").innerHTML = Obj.fav_quote;
    document.getElementById("FAV-QUOTE").setAttribute("cite", Obj.fav_quote_cite);
    document.getElementById("EDUCATION").innerHTML = Obj.education;
    document.getElementById("SKILL1").innerHTML = Obj.skill1;
    document.getElementById("SKILL2").innerHTML = Obj.skill2;
    document.getElementById("SKILL3").innerHTML = Obj.skill3;

    var X;
    X = document.getElementById("SKILL1-PROG");
    X.setAttribute("aria-valuenow",Obj.skill1_prog);
    X.setAttribute("style","width: " + Obj.skill1_prog + "%");
    X = document.getElementById("SKILL2-PROG");
    X.setAttribute("aria-valuenow",Obj.skill2_prog);
    X.setAttribute("style","width: " + Obj.skill2_prog + "%");
    X = document.getElementById("SKILL3-PROG");
    X.setAttribute("aria-valuenow",Obj.skill3_prog);
    X.setAttribute("style","width: " + Obj.skill3_prog + "%");
    document.getElementById("ADDRESS-IFRAM").setAttribute("src", Obj.address_ifram_src);
    document.getElementById("ADRESS-TEXT").innerHTML = Obj.address_text;
}

write_to_document(Data);