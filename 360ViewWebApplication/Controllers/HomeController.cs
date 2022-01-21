using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Xml;

namespace _360ViewWebApplication.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult LoadOnDemandPartial()
        {
            return PartialView();
        }

        public ActionResult Load360DegreeImageDialogPartial()
        {
            return PartialView("360DegreeImageDialogPartial");
        }
    }
}