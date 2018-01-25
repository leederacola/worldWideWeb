using System.Web;
using System.Web.Optimization;

namespace ryan.madden.internet
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            //  allow cdn - set paths as vars
            bundles.UseCdn = true;
            var jQueryCdnPath = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
            var bootStrapCdnPath = "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css";
            
            /** Default jQuery 
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include("~/Scripts/jquery-{version}.js"));
            **/

            //  overloaded jQ bundle with cdn path
            bundles.Add(new ScriptBundle("~/bundles/jQuery", jQueryCdnPath).Include(
                "~/Scripts/jQuery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            /**     Deafualt Bootstrap
             * 
            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include( "~/Scripts/bootstrap.js","~/Scripts/respond.js"));
            */

            // overloaded BS4 with cdn path
            bundles.Add(new ScriptBundle("~/bundles/bootstrap", bootStrapCdnPath).Include(
                "~/Scripts/bootstrap.js",
                "~/Scripts/respond.js"));
            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            // this guy needs to be true to min and bundle
            // it overrides the webConfig <compilation debug="true"/>
            // currently set to false cause i aint know if both are needed.
            BundleTable.EnableOptimizations = true;
        }

        

    }
}
