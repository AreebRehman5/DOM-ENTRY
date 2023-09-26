var tabletag=document.getElementById("table-view")
var sname=document.getElementById("NAME")
var fname=document.getElementById("FATHER-NAME")
var score=document.getElementById("SCORE")



var addbtn=document.getElementById("addbtn")
var inc=0
var totalscore=0
addbtn.addEventListener('click',function(){

    let del=document.createElement('td')
    let delimg=document.createElement('img')
    del.appendChild(delimg)
    let tablerow=document.createElement('tr')
    let sntd=document.createElement('td')
    sntd.setAttribute('id','sntd')
    inc+=1
    
    sntd.innerText=inc
    let ntd=document.createElement('td')
    ntd.innerText=sname.value
    let fntd=document.createElement('td')
    fntd.innerText=fname.value
    let std=document.createElement('td')
    std.innerText=score.value
    let ttd=document.createElement('td')
    totalscore+=parseInt(score.value)
    ttd.innerText=totalscore
    delimg.src="https://static.vecteezy.com/system/resources/thumbnails/004/581/271/small/trash-can-icon-garbage-bin-with-lid-delete-symbol-illustration-free-vector.jpg"
delimg.style.width="30px"
delimg.style.cursor="pointer"
del.style.border="none"

del.addEventListener('click',function(){


    
    
  document.getElementById('sntd')
    tablerow.remove()
    totalscore-=parseInt(score.value)
    ttd.innerText=totalscore
})
tablerow.addEventListener('mouseover',function(){
    del.style.opacity="1"
})
tablerow.addEventListener('mouseout',function(){
    del.style.opacity="0"
})
    tablerow.appendChild(sntd)
tablerow.appendChild(ntd)
tablerow.appendChild(fntd)
tablerow.appendChild(std)
tablerow.appendChild(ttd)
tablerow.appendChild(del)
tabletag.appendChild(tablerow)
})