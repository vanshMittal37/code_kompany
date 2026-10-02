import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getServiceBySlug } from '../data/services';
import Seo from '../components/Seo/Seo';
import NotFound from './NotFound';
import StandardLayout from './ServiceDetail/StandardLayout';
import IndustryLayout from './ServiceDetail/IndustryLayout';

export default function ServiceDetail() {
  const { slug } = useParams();
  const { pathname } = useLocation();

  const service = getServiceBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  if (!service) {
    return <NotFound />;
  }

  return (
    <>
      <Seo
        title={service.seo.title}
        description={service.seo.description}
        path={`/services/${service.slug}`}
      />

      {service.layout === 'industry' ? (
        <IndustryLayout service={service} />
      ) : (
        <StandardLayout service={service} />
      )}
    </>
  );
}
