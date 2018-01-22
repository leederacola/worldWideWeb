using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace worldWideWeb.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult MyStats()
        {
            return View();
        }
        public ActionResult Resume()
        {
            return View();
        }
        public ActionResult Contact()
        {
            return View();
        }
        public ActionResult SocialLinks()
        {
            return View();
        }

        public ViewResult trialSpace()
        {
            return View();
        }



    }
}