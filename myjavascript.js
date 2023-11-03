//Khai bao bien toan cuc
	var PV1;
	var PV2; 
	var SP1;
	var SP2;
	var Kp1;
	var Ti1;
	var Td1;
	var	Kp2;  
	var Ti2;
	var Td2;
	var Run;
	var web_current;
	var thoigian; 
	//Khai bao bien den bao hieu
	var emergency;
	var Emergency_Temp; //Emergency da duoc kich hoat
	var lamp_color; //Mau den bao Start, Stop, Emergency


	//Khai bao bien toan cuc REPORT
			var chiso = 0;
			var status;
			var arr_value_1 = [];
			var arr_display_1 = [];
			var currentText_1 = [];

			var arr_value_2 = [];
			var arr_display_2 = [];
			var currentText_2 = [];

		if (Run == "0") {
			var arr_value_full_1;
			var arr_value_full_2;
			var arr_value_full;
		}

	//Ket thuc khai bao bien

//Ket thuc khai bao bien toan cuc
function load_xong() {
			gettime();
			if (web_current == 1) {
				loadXML();			//Control
			} else {
				if (web_current == 2) {
					Trend_loadXML();	//Trend
					vedothi();
					trend_report_display();
				} else {
					Trend_loadXML();	//Report
					vedothi();
					report_display();	
				}
			}
								
}

//Lay thoi gian thuc
function gettime() {
			setInterval(function() {
				d = new Date();
			    n = d.toLocaleString();
				document.getElementById("time").innerHTML = n;
				thoigian = n;
				Lamp();
			}, 1000);
		}

//
function loadXML(){
		var xmlhttp;
		if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		} else {
			xmlhttp = new ActiveX0bject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState==4 && xmlhttp.status==200) {
				var arr = xmlhttp.responseText.toString().match(/[^\r\n]+/g);
				//document.getElementById('kq1').innerHTML=arr;
				//document.getElementById("Start").innerHTML=arr[0]; 	//Start
				//document.getElementById("Stop").innerHTML=arr[1];  	//Stop
				//document.getElementById("Run").innerHTML=arr[2];  	//Run
				//document.getElementById("Finish").innerHTML=arr[3];  //Finish
				document.getElementById("PV1").innerHTML= parseFloat(arr[4]);//arr[4];  	//PV1
				document.getElementById("PV2").innerHTML= parseFloat(arr[5]);//arr[5];  	//PV2
				document.getElementById("SP1").innerHTML= parseFloat(arr[6]);//arr[6];  	//SP1
				document.getElementById("SP2").innerHTML= parseFloat(arr[7]);//arr[7];  	//SP2
				document.getElementById("Kp1").innerHTML= parseFloat(arr[8]);//arr[8];  	//Kp1
				document.getElementById("Ti1").innerHTML= parseFloat(arr[9]);//arr[9];  	//Ti1
				document.getElementById("Td1").innerHTML= parseFloat(arr[10]);//arr[10];  	//Td1
				document.getElementById("Kp2").innerHTML= parseFloat(arr[11]);//arr[11];  	//Kp2
				document.getElementById("Ti2").innerHTML= parseFloat(arr[12]);//arr[12];  	//Ti2
				document.getElementById("Td2").innerHTML= parseFloat(arr[13]);//arr[13];  	//Td2
				Run = arr[2];
				PV1 = parseFloat(arr[4]);
				PV2 = parseFloat(arr[5]);
				SP1 = parseFloat(arr[6]);
				SP2 = parseFloat(arr[7]); 
				Kp1 = parseFloat(arr[8]);
				Ti1 = parseFloat(arr[9]);
				Td1 = parseFloat(arr[10]);
				Kp2 = parseFloat(arr[11]);
				Ti2 = parseFloat(arr[12]);
				Td2 = parseFloat(arr[13]);

				emergency = arr[14];
				Emergency_Temp = arr[15];
			}
		}
		xmlhttp.open("GET","dulieu.html",true);
		xmlhttp.send();
		setTimeout('loadXML()',200);
		}
		//Ket thuc loadXML()
		//===============================================================
		//Bat dau load cho Trend va Report
		function Trend_loadXML(){
		var xmlhttp;
		if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		} else {
			xmlhttp = new ActiveX0bject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState==4 && xmlhttp.status==200) {
				var arr = xmlhttp.responseText.toString().match(/[^\r\n]+/g);
				document.getElementById("PV1").innerHTML= parseFloat(arr[4]);//arr[4];  	//PV1
				document.getElementById("PV2").innerHTML= parseFloat(arr[5]);//arr[5];  	//PV2
			if(web_current==2){
				document.getElementById("SP1").innerHTML= parseFloat(arr[6]);//arr[6];  	//SP1
				document.getElementById("SP2").innerHTML= parseFloat(arr[7]);//arr[7];  	//SP2
			}
				PV1 = parseFloat(arr[4]);
				PV2 = parseFloat(arr[5]);
				SP1 = parseFloat(arr[6]);
				SP2 = parseFloat(arr[7]); 
				Kp1 = parseFloat(arr[8]);
				Ti1 = parseFloat(arr[9]);
				Td1 = parseFloat(arr[10]);
				Kp2 = parseFloat(arr[11]);
				Ti2 = parseFloat(arr[12]);
				Td2 = parseFloat(arr[13]);
				Run = arr[2];

				emergency = arr[14];
				Emergency_Temp = arr[15];
			}
		}
		xmlhttp.open("GET","dulieu.html",true);
		xmlhttp.send();
		setTimeout('Trend_loadXML()',200);
		}
		//Ket thuc load cho Trend
		//===============================================================

		//Gui du lieu len
		//Khai bao bien toan cuc
		//---------------------------------------------------------------
		var bitStart = "0";
		var bitStop = "0";
		//---------------------------------------------------------------
		//Bat dau phan Stop
		function guiStart(){
			var xmlhttp;
			if (window.XMLHttpRequest) {
				xmlhttp = new XMLHttpRequest();
			} else {
				xmlhttp = new ActiveX0bject("Microsoft.XMLHTTP");
			}
			//text = document.getElementById("text").value;
			//document.getElementById("sent").innerHTML=text;
			xmlhttp.open("POST","guidulieu.html",true);
			// xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xmlhttp.send("\"WinCC_Start\"="+ bitStart);	
		}
		//Nha chuot trai ra Reset toan bo bien Start, Stop
		function mouseDown_Start() {
		    bitStart = "1";
		    guiStart();
		}
		function mouseUp_Start() {
		    bitStart = "0";
		    guiStart();
		}
		//Ket thuc phan Start
		//---------------------------------------------------------------
		//Bat dau phan Stop
		function guiStop(){
			var xmlhttp;
			if (window.XMLHttpRequest) {
				xmlhttp = new XMLHttpRequest();
			} else {
				xmlhttp = new ActiveX0bject("Microsoft.XMLHTTP");
			}
			xmlhttp.open("POST","guidulieu.html",true);
			xmlhttp.send("\"WinCC_Stop\"="+bitStop);		
		}

		function mouseDown_Stop() {
		    bitStop = "1";
		    guiStop();
		}
		function mouseUp_Stop() {
		    bitStop = "0";
		    guiStop();
		}
		//Ket thuc phan gui Stop
		//---------------------------------------------------------------
		//Gui value
		function SetValue(){
			var xmlhttp;
			if (window.XMLHttpRequest) {
				xmlhttp = new XMLHttpRequest();
			} else {
				xmlhttp = new ActiveX0bject("Microsoft.XMLHTTP");
			}
			txtSP1 = document.getElementById("txtSP1").value;
			txtSP2 = document.getElementById("txtSP2").value;	
			SP1_Sent = parseFloat(txtSP1);
			SP2_Sent = parseFloat(txtSP2);
	
			xmlhttp.open("POST","guidulieu.html",true);
			xmlhttp.send("\"SP1\"="+SP1_Sent+"&"+"\"SP2\"="+SP2_Sent);		
		}
		var Ti1_Sent;
		//Gui gia tri Kp, Ki, Kd, SP
		function Control_SetValue(){
			var xmlhttp;
			if (window.XMLHttpRequest) {
				xmlhttp = new XMLHttpRequest();
			} else {
				xmlhttp = new ActiveX0bject("Microsoft.XMLHTTP");
			}
			txtSP1 = document.getElementById("txtSP1").value;
			txtSP2 = document.getElementById("txtSP2").value;
			txtKp1 = document.getElementById("txtKp1").value;
			txtTi1 = document.getElementById("txtTi1").value;
			txtTd1 = document.getElementById("txtTd1").value;
			txtKp2 = document.getElementById("txtKp2").value;
			txtTi2 = document.getElementById("txtTi2").value;
			txtTd2 = document.getElementById("txtTd2").value;
			//Nhan len 100 de lay so nguyen
			SP1_Sent = parseFloat(txtSP1);
			SP2_Sent = parseFloat(txtSP2);
			Kp1_Sent = parseFloat(txtKp1);
			Kp2_Sent = parseFloat(txtKp2);
			Ti1_Sent = parseFloat(txtTi1);
			Ti2_Sent = parseFloat(txtTi2);
			Td1_Sent = parseFloat(txtTd1);
			Td2_Sent = parseFloat(txtTd2);
			txtSent = "\"SP1\"="+SP1_Sent+"&"+"\"SP2\"="+SP2_Sent+"&"+"\"Kp1\"="+Kp1_Sent+"&"+"\"Kp2\"="+Kp2_Sent+"&"+"\"Ti1\"="+Ti1_Sent+"&"+"\"Ti2\"="+Ti2_Sent+"&"+"\"Td1\"="+Td1_Sent+"&"+"\"Td2\"="+Td2_Sent;

			xmlhttp.open("POST","guidulieu.html",true);
			// xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			//xmlhttp.send("\"SP1\"="+txtSP1);
			xmlhttp.send(txtSent);		
}

//====================================================================================================
//			VE DO THI
//====================================================================================================
				function vedothi() {
					dothi1();
					dothi2();
				}
				function dothi1(){
				      var line1 = new TimeSeries();
				      var line2 = new TimeSeries();
				      setInterval(function() {
				        line1.append(new Date().getTime(), SP1);
				        line2.append(new Date().getTime(), PV1); //Math.random()*100				   
				        arr_value_1.push(PV1);
				      }, 1000);

				      var smoothie = new SmoothieChart({ grid: { strokeStyle: 'rgba(119, 119, 119, 1)', fillStyle: 'rgba(0, 0, 0,1)', lineWidth: 1, millisPerLine: 1000, verticalSections: 6 },maxValue:50, minValue:0, millisPerPixel:20,maxValueScale:0.86,scaleSmoothing:0.266,timestampFormatter:SmoothieChart.timeFormatter });

					      smoothie.addTimeSeries(line1, { strokeStyle: 'rgb(0, 255, 0)',   lineWidth: 3 });
					      smoothie.addTimeSeries(line2, { strokeStyle: 'rgb(255, 0, 255)', lineWidth: 3 });

				      smoothie.streamTo(document.getElementById("mycanvas1"), 1000);
				}
				function dothi2() {
					  var line12 = new TimeSeries();
				      var line22 = new TimeSeries();
				      setInterval(function() {
				        line12.append(new Date().getTime(), SP2);
				        line22.append(new Date().getTime(), PV2);
				        arr_value_2.push(PV2);
				      }, 1000);

				      var smoothie2 = new SmoothieChart({ grid: { strokeStyle: 'rgba(119, 119, 119, 1)', fillStyle: 'rgba(0, 0, 0,1)', lineWidth: 1, millisPerLine: 1000, verticalSections: 6 },maxValue:50, minValue:0, millisPerPixel:20,maxValueScale:0.86,scaleSmoothing:0.266,timestampFormatter:SmoothieChart.timeFormatter });

					      smoothie2.addTimeSeries(line12, { strokeStyle: 'rgb(0, 255, 0)',   lineWidth: 3 });
					      smoothie2.addTimeSeries(line22, { strokeStyle: 'rgb(255, 0, 255)', lineWidth: 3 });

				      smoothie2.streamTo(document.getElementById("mycanvas2"), 1000);
				}

//====================================================================================================
//			REPORT
//====================================================================================================

		function saveTextAsFile() {
        //var textToWrite = document.getElementById("report").textContent;
        //Ghi du lieu bien nao bo vao day
        arr_value_full = " REPORT 1 "+"\n"+ arr_value_full_1+"\n"+" REPORT 2 "+"\n"+arr_value_full_2;
        var textToWrite = arr_value_full; 
       
        var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
        var fileNameToSaveAs = "REPORT-SCADA"+thoigian;

        var downloadLink = document.createElement("a");
        downloadLink.download = fileNameToSaveAs;
        downloadLink.innerHTML = "Download File";
        if (window.webkitURL != null) {
            // Chrome allows the link to be clicked
            // without actually adding it to the DOM.
            downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
        }
        else {
            // Firefox requires the link to be added to the DOM
            // before it can be clicked.
            downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
            downloadLink.onclick = destroyClickedElement;
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);
        }

        downloadLink.click();
   			 }

	    function destroyClickedElement(event) {
	        document.body.removeChild(event.target);
	    }
//----------------------------------------------------------------------------
// 						Trend chay ngam Report
//----------------------------------------------------------------------------
	function trend_report_display() {			
			setInterval(function() {
				if (chiso<=10) { 
	            	arr_display_1 = thoigian+", Stt:"+Status+": SP1: "+SP1+", PV1: "+arr_value_1[chiso];
	            	arr_display_2 = thoigian+", Stt:"+Status+": SP2: "+SP2+", PV2: "+arr_value_2[chiso];

	            	currentText_1 += arr_display_1+" \n";
	            	currentText_2 += arr_display_2+" \n";
	                chiso++;
                } 
                if (chiso >= 10) {
                	chiso = 0;
                	arr_value_full_1+=currentText_1;
                	arr_value_full_2+=currentText_2;
                	arr_value_1 = [];
                   	arr_value_2 = [];
                	currentText_1 = [];
                	currentText_2 = [];
                }
        	}, 1000);
	}
	//----------------------------------------------------------------------------
	// 						Den bao
	//----------------------------------------------------------------------------
	function Lamp() {
				if (Run == "1") {
					lamp_color = "green";
				} else {
					if (Emergency_Temp == "1") {
						if (emergency == "1") {
							lamp_color = "yellow";
						} else {
							lamp_color = "white";
						}
					} else {
						lamp_color = "red";
					}	
				}
				document.getElementById("Lamp_Display").style.background = lamp_color;
			}
