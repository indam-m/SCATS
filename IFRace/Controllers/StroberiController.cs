using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Ajax;
using System.Net;
using System.Web.Services;
using System.Web.Http;
using IFRace.Models;
using System.IO.Ports;

namespace IFRace
{
	public class StroberiController : ApiController
	{
		public static SerialPort myport;
		private string portname = "/dev/cu.usbmodem1421";
		public static Stroberi stroberi = new Stroberi();

		public IHttpActionResult GetAllStroberi()
		{
			UpdateStroberi ();
			return Ok(stroberi);
		}

		private void UpdateStroberi()
		{
			try
			{
				System.ComponentModel.IContainer components = new System.ComponentModel.Container();
				myport = new SerialPort(components);
				myport.BaudRate = 9600;
				myport.PortName = portname;
				myport.Open();

				string RXstring = myport.ReadLine();
				myport.WriteLine("5");
				stroberi.suhu = RXstring + " °C";
				myport.WriteLine("6");
				RXstring = myport.ReadLine();
				stroberi.kelembaban = RXstring + " %";
			}
			catch (Exception)
			{
			}
		}
	}
}

