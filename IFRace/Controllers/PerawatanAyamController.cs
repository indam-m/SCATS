using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Ajax;
using System.IO.Ports;
using System.Threading;

namespace IFRace.Controllers
{
	[RoutePrefix("perawatan-ayam")]
	public class PerawatanAyamController : Controller
	{
		private string portname = "/dev/cu.usbmodem1421";

		[Route("")]
		public ActionResult Index()
		{
			return View ();
		}

		[Route("form")]
		[HttpGet]
		public ActionResult Form()
		{
			return View ();
		}
			
		[Route("form-jendela")]
		[HttpPost]
		public ActionResult FormJendela(string jendela)
		{
			try
			{
				AyamController.myport = new SerialPort();
				AyamController.myport.BaudRate = 9600;
				AyamController.myport.PortName = portname;
				AyamController.myport.Open();

				if(jendela == "tutup"){
					AyamController.myport.WriteLine("4");
					AyamController.ayam.jendela = false;
				}
				else{
					AyamController.myport.WriteLine("3");
					AyamController.ayam.jendela = true;
				}
			}
			catch (Exception)
			{
			}
			return Redirect ("~/perawatan-ayam");
		}

		[Route("form-kipas-angin")]
		[HttpPost]
		public ActionResult FormKipasAngin(string kipas_angin)
		{
			try
			{
				AyamController.myport = new SerialPort();
				AyamController.myport.BaudRate = 9600;
				AyamController.myport.PortName = portname;
				AyamController.myport.Open();

				if(kipas_angin == "padam"){
					AyamController.myport.WriteLine("0");
					AyamController.ayam.kipas_angin = false;
				}
				else{
					AyamController.myport.WriteLine("9");
					AyamController.ayam.kipas_angin = true;
				}
			}
			catch (Exception)
			{
			}
			return Redirect ("~/perawatan-ayam");
		}

		[Route("form-lampu")]
		[HttpPost]
		public ActionResult FormLampu(string lampu)
		{
			try
			{
				AyamController.myport = new SerialPort();
				AyamController.myport.BaudRate = 9600;
				AyamController.myport.PortName = portname;
				AyamController.myport.Open();

				if(lampu == "padam"){
					AyamController.myport.WriteLine("8");
					AyamController.ayam.lampu = false;
				}
				else{
					AyamController.myport.WriteLine("7");
					AyamController.ayam.lampu = true;
				}
			}
			catch (Exception)
			{
			}
			return Redirect ("~/perawatan-ayam");
		}

		[Route("form-minum")]
		[HttpPost]
		public ActionResult FormMinum()
		{
			try
			{
				AyamController.myport = new SerialPort();
				AyamController.myport.BaudRate = 9600;
				AyamController.myport.PortName = portname;
				AyamController.myport.Open();

				AyamController.myport.WriteLine("1");
			}
			catch (Exception)
			{
			}
			return Redirect ("~/perawatan-ayam");
		}

		[Route("form-pakan")]
		[HttpPost]
		public ActionResult FormPakan()
		{
			try
			{
				AyamController.myport = new SerialPort();
				AyamController.myport.BaudRate = 9600;
				AyamController.myport.PortName = portname;
				AyamController.myport.Open();

				AyamController.myport.WriteLine("2");
			}
			catch (Exception)
			{
			}
			return Redirect ("~/perawatan-ayam");
		}
	}
}

