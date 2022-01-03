var xy = ''
var FcapsLock = '0';
var Fshift = '0';

//Function key start

//BackSpace
function funcDel() {
	var valu = document.getElementById('display').innerHTML;
	var x = document.getElementById('display').innerHTML.length;
	var y = 1;
	var z = x-y;
	document.getElementById('display').innerHTML=valu.slice(0,z);
}
funcDel()
//CapsLock
function funcCL() {
	if (FcapsLock === '0') {
		FcapsLock = '1';
	}else if (FcapsLock === '1') {
		FcapsLock = '0';
	}
}
funcCL()

//Clear
function funcClear() {
	var value = document.getElementById('display').innerHTML='';
	FcapsLock = '0';
    Fshift = '0';
}
funcClear()
//Shift
function funcShift() {
	if (Fshift === '0') {
		Fshift = '1';
	}else if (Fshift === '1') {
		Fshift = '0';
	}
}
funcShift()
//Enter
function funcEnter() {
	var valu = document.getElementById('display').innerHTML;
	if (valu === '') {
		alert('Not inserted : Empty innerHTML');
	}else{
		alert('Data Inserted : '+valu);
	}
}
funcEnter()
//Tab
function funcTab() {
	var valu = document.getElementById('display').innerHTML;
	document.getElementById('display').innerHTML=valu+'	';
}
funcTab()
//Space
function funcSpace() {
	var valu = document.getElementById('display').innerHTML;
	document.getElementById('display').innerHTML=valu+' ';
}
funcSpace()

//q
function funcq() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock === '0') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'q';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'Q';
		}
	}else if (FcapsLock === '1') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'Q';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'q';
		}
	}
}
funcq()
//w
function funcw() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock === '0') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'w';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'W';
		}
	}else if (FcapsLock === '1') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'W';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'w';
		}
	}
}
funcw()
//e
function funce() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock === '0') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'e';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'E';
		}
	}else if (FcapsLock === '1') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'E';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'e';
		}
	}
}
funce()
//r
function funcr() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock === '0') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'r';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'R';
		}
	}else if (FcapsLock === '1') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'R';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'r';
		}
	}
}
funcr()
//t
function funct() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock === '0') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'t';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'T';
		}
	}else if (FcapsLock === '1') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'T';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'t';
		}
	}
}
funct()
//y
function funcy() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock === '0') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'y';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'Y';
		}
	}else if (FcapsLock === '1') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'Y';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'y';
		}
	}
}
funcy()
//u
function funcu() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock === '0') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'u';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'U';
		}
	}else if (FcapsLock === '1') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'U';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'u';
		}
	}
}
funcu()
//i
function funci() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock === '0') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'i';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'I';
		}
	}else if (FcapsLock === '1') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'I';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'i';
		}
	}
}
funci()
//o
function funco() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock === '0') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'o';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'O';
		}
	}else if (FcapsLock === '1') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'O';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'o';
		}
	}
}
funco()
//p
function funcp() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock === '0') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'p';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'P';
		}
	}else if (FcapsLock === '1') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'P';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'p';
		}
	}
}
funcp()
//a
function funca() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock === '0') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'a';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'A';
		}
	}else if (FcapsLock === '1') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'A';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'a';
		}
	}
}
funca()
//s
function funcs() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock === '0') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'s';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'S';
		}
	}else if (FcapsLock === '1') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'S';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'s';
		}
	}
}
funcs()
//d
function funcd() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock === '0') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'d';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'D';
		}
	}else if (FcapsLock === '1') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'D';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'d';
		}
	}
}
funcd()
//f
function funcf() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock === '0') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'f';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'F';
		}
	}else if (FcapsLock === '1') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'F';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'f';
		}
	}
}
funcf()
//g
function funcg() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock === '0') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'g';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'G';
		}
	}else if (FcapsLock === '1') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'G';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'g';
		}
	}
}
funcg()
//h
function funch() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock === '0') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'h';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'H';
		}
	}else if (FcapsLock === '1') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'H';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'h';
		}
	}
}
funch()
//j
function funcj() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock === '0') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'j';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'J';
		}
	}else if (FcapsLock === '1') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'J';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'j';
		}
	}
}
funcj()
//k
function funck() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock === '0') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'k';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'K';
		}
	}else if (FcapsLock === '1') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'K';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'k';
		}
	}
}
funck()
//l
function funcl() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock === '0') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'l';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'L';
		}
	}else if (FcapsLock === '1') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'L';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'l';
		}
	}
}
funcl()

//z
function funcz() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock === '0') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'z';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'Z';
		}
	}else if (FcapsLock === '1') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'Z';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'z';
		}
	}
}
funcz()
//x
function funcx() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock === '0') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'x';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'X';
		}
	}else if (FcapsLock === '1') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'X';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'x';
		}
	}
}
funcx()
//c
function funcc() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock === '0') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'c';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'C';
		}
	}else if (FcapsLock === '1') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'C';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'c';
		}
	}
}
funcc()
//v
function funcv() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock === '0') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'v';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'V';
		}
	}else if (FcapsLock === '1') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'V';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'v';
		}
	}
}
funcv()
//b
function funcb() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock === '0') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'b';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'B';
		}
	}else if (FcapsLock === '1') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'B';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'b';
		}
	}
}
funcb()
//n
function funcn() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock === '0') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'n';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'N';
		}
	}else if (FcapsLock === '1') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'N';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'n';
		}
	}
}
funcn()
//m
function funcm() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock === '0') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'m';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'M';
		}
	}else if (FcapsLock === '1') {
		if (Fshift === '0') {
			document.getElementById('display').innerHTML=valu+'M';
		}else if (Fshift === '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'m';
		}
	}
}
funcm()
//Number Keys
//1
function func1() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift === '0') {
		document.getElementById('display').innerHTML=valu+'1';
	}else if (Fshift === '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'!';
	}
}
func1()
//2
function func2() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift === '0') {
		document.getElementById('display').innerHTML=valu+'2';
	}else if (Fshift === '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'@';
	}
}
func2()
//3
function func3() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift === '0') {
		document.getElementById('display').innerHTML=valu+'3';
	}else if (Fshift === '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'#';
	}
}
func3()
//4
function func4() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift === '0') {
		document.getElementById('display').innerHTML=valu+'4';
	}else if (Fshift === '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'$';
	}
}
func4()
//5
function func5() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift === '0') {
		document.getElementById('display').innerHTML=valu+'5';
	}else if (Fshift === '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'%';
	}
}
func5()
//6
function func6() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift === '0') {
		document.getElementById('display').innerHTML=valu+'6';
	}else if (Fshift === '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'^';
	}
}
func6()
//7
function func7() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift === '0') {
		document.getElementById('display').innerHTML=valu+'7';
	}else if (Fshift === '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'&';
	}
}
func7()
//8
function func8() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift === '0') {
		document.getElementById('display').innerHTML=valu+'8';
	}else if (Fshift === '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'*';
	}
}
func8()
//9
function func9() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift === '0') {
		document.getElementById('display').innerHTML=valu+'9';
	}else if (Fshift === '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'(';
	}
}
func9()
//0
function func0() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift === '0') {
		document.getElementById('display').innerHTML=valu+'0';
	}else if (Fshift === '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+')';
	}
}
func0()
//Special keys
function funcSc1() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift === '0') {
		document.getElementById('display').innerHTML=valu+'`';
	}else if (Fshift ==='1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'~';
	}
}
funcSc1()
function funcSc2() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift === '0') {
		document.getElementById('display').innerHTML=valu+'_';
	}else if (Fshift === '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'-';
	}
}
funcSc2()
function funcSc3() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift === '0') {
		document.getElementById('display').innerHTML=valu+'[';
	}else if (Fshift === '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'{';
	}
}
funcSc3()
function funcSc4() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift === '0') {
		document.getElementById('display').innerHTML=valu+']';
	}else if (Fshift === '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'}';
	}
}
funcSc4()
function funcSc5() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift === '0') {
		document.getElementById('display').innerHTML=valu+'\\';
	}else if (Fshift === '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'|';
	}
}
funcSc5()
function funcSc6() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift === '0') {
		document.getElementById('display').innerHTML=valu+';';
	}else if (Fshift === '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+':';
	}
}
funcSc6()
function funcSc7() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift === '0') {
		document.getElementById('display').innerHTML=valu+"'";
	}else if (Fshift === '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'"';
	}
}
funcSc7()
function funcSc8() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift === '0') {
		document.getElementById('display').innerHTML=valu+',';
	}else if (Fshift === '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'<';
	}
}
funcSc8()
function funcSc9() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift === '0') {
		document.getElementById('display').innerHTML=valu+'/';
	}else if (Fshift === '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'?';
	}
}
funcSc9()
function funcDot() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift === '0') {
		document.getElementById('display').innerHTML=valu+'.';
	}else if (Fshift === '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'>';
	}
}
funcDot() 