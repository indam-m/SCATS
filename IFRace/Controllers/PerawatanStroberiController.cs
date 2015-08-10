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
	[RoutePrefix("perawatan-stroberi")]
	public class PerawatanStroberiController : Controller
	{
		private string portname = "/dev/cu.usbmodem1421";

		[Route("")]
		public ActionResult Index()
		{
			return View ();
		}

		[Route("form")]
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
				StroberiController.myport = new SerialPort();
				StroberiController.myport.BaudRate = 9600;
				StroberiController.myport.PortName = portname;
				StroberiController.myport.Open();

				if(jendela == "tutup"){
					StroberiController.myport.WriteLine("b");
					StroberiController.stroberi.jendela = false;
				}
				else{
					StroberiController.myport.WriteLine("a");
					StroberiController.stroberi.jendela = true;
				}
			}
			catch (Exception)
			{
			}
			return Redirect ("~/perawatan-stroberi");
		}

		[Route("form-lampu")]
		[HttpPost]
		public ActionResult FormLampu(string lampu)
		{
			try
			{
				StroberiController.myport = new SerialPort();
				StroberiController.myport.BaudRate = 9600;
				StroberiController.myport.PortName = portname;
				StroberiController.myport.Open();

				if(lampu == "padam"){
					StroberiController.myport.WriteLine("d");
					StroberiController.stroberi.lampu = false;
				}
				else{
					StroberiController.myport.WriteLine("c");
					StroberiController.stroberi.lampu = true;
				}
			}
			catch (Exception)
			{
			}
			return Redirect ("~/perawatan-stroberi");
		}

		[Route("form-siram")]
		[HttpPost]
		public ActionResult FormSiram()
		{
			try
			{
				StroberiController.myport = new SerialPort();
				StroberiController.myport.BaudRate = 9600;
				StroberiController.myport.PortName = portname;
				StroberiController.myport.Open();

				StroberiController.myport.WriteLine("e");
			}
			catch (Exception)
			{
			}
			return Redirect ("~/perawatan-stroberi");
		}
	}
}

