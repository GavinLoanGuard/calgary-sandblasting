import type { MetadataRoute } from "next";
import { DOMAIN } from "@/config/site";
import { SERVICES } from "@/data/services";
import { SERVICE_AREAS } from "@/data/service-areas";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/service-areas", "/pricing", "/gallery", "/contact", "/faq"];

  const routes: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${DOMAIN}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  for (const service of SERVICES) {
    routes.push({
      url: `${DOMAIN}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }

  for (const city of SERVICE_AREAS) {
    routes.push({
      url: `${DOMAIN}/service-areas/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  return routes;
}
