

let tinhDTB = (...tinh) =>{
    let tongDiem = 0;
    let dtb = 0;

    for(let arg in tinh){
        tongDiem += tinh[arg]; 
        let n = tinh.length;
        dtb = tongDiem/n;

    }
     
return dtb;
}



let DTBk1 = () =>{
    let diemToan = Number(document.getElementById("inpToan").value); 
    let diemLy = Number(document.getElementById("inpLy").value);
    let diemHoa = Number(document.getElementById("inpHoa").value);
    let dtb = tinhDTB(diemHoa,diemLy,diemToan);
    document.getElementById("tbKhoi1").innerHTML = dtb;
}
 
 document.getElementById("btnKhoi1").onclick = DTBk1;


 let DTBk2 = () =>{
    let diemVan = Number(document.getElementById("inpVan").value); 
    let diemSu = Number(document.getElementById("inpSu").value);
    let diemDia = Number(document.getElementById("inpDia").value);
    let diemAnh = Number(document.getElementById("inpEnglish").value);
    let dtb = tinhDTB(diemVan,diemSu,diemDia,diemAnh);
    document.getElementById("tbKhoi2").innerHTML = dtb;
}
 
 document.getElementById("btnKhoi2").onclick = DTBk2;