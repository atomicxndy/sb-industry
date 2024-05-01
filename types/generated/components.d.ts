import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutUsCtaComponentAboutUsCallToActionComponent
  extends Schema.Component {
  collectionName: 'components_about_us_cta_component_about_us_call_to_action_components';
  info: {
    displayName: 'About Us Call To Action Component';
    icon: 'apps';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    ctaMain: Attribute.Text & Attribute.Required;
    ctaBtnLabel: Attribute.String & Attribute.Required;
  };
}

export interface ContactUsContactUsAddressInfoComponent
  extends Schema.Component {
  collectionName: 'components_contact_us_contact_us_address_info_components';
  info: {
    displayName: 'Contact Us Address Info Component';
    icon: 'apps';
  };
  attributes: {
    addressLabel: Attribute.String & Attribute.Required;
    addressContent: Attribute.String & Attribute.Required;
    phoneNumberLabel: Attribute.String & Attribute.Required;
    phoneNumberContent: Attribute.String & Attribute.Required;
    emailLabel: Attribute.String & Attribute.Required;
    emailSales: Attribute.Email & Attribute.Required;
    emailInfo: Attribute.Email & Attribute.Required;
    submitFormBtnLabel: Attribute.String;
  };
}

export interface ContactUsContactUsDescriptionComponent
  extends Schema.Component {
  collectionName: 'components_contact_us_contact_us_description_components';
  info: {
    displayName: 'Contact Us Description Component';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface FaqFaqQuestionComponent extends Schema.Component {
  collectionName: 'components_faq_faq_question_components';
  info: {
    displayName: 'FAQ Question Component';
    icon: 'bulletList';
  };
  attributes: {
    questionTitle: Attribute.Text & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
  };
}

export interface FaqHomepageFaqList extends Schema.Component {
  collectionName: 'components_faq_homepage_faq_lists';
  info: {
    displayName: 'Homepage - FAQ List';
    icon: 'bulletList';
  };
  attributes: {
    faqTitle: Attribute.String & Attribute.Required;
    faqDescription: Attribute.Text & Attribute.Required;
  };
}

export interface FooterAddress extends Schema.Component {
  collectionName: 'components_footer_addresses';
  info: {
    displayName: 'Address';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    addressData: Attribute.Text & Attribute.Required;
    phoneData: Attribute.Text;
  };
}

export interface FooterFooterMoreLinks extends Schema.Component {
  collectionName: 'components_footer_footer_more_links_s';
  info: {
    displayName: 'Footer More Links ';
    icon: 'bulletList';
  };
  attributes: {
    sectionTitle: Attribute.String;
    gdprPageLabel: Attribute.String;
    termsPageLabel: Attribute.String;
    euFondsPageLabel: Attribute.String;
    faqPageLabel: Attribute.String;
  };
}

export interface FooterFooterNewsletter extends Schema.Component {
  collectionName: 'components_footer_footer_newsletters';
  info: {
    displayName: 'Footer Newsletter';
    icon: 'apps';
  };
  attributes: {
    sectionTitle: Attribute.String;
    sectionDescription: Attribute.String;
  };
}

export interface FooterFooterSocialMediaLinks extends Schema.Component {
  collectionName: 'components_footer_footer_social_media_links';
  info: {
    displayName: 'Footer Social Media Links';
    icon: 'bulletList';
  };
  attributes: {
    instagramUrl: Attribute.String;
    facebookUrl: Attribute.String;
    linkedinUrl: Attribute.String;
    youtubeUrl: Attribute.String;
  };
}

export interface GalleryImageGallery extends Schema.Component {
  collectionName: 'components_gallery_image_galleries';
  info: {
    displayName: 'Image Gallery';
    icon: 'apps';
  };
  attributes: {
    label: Attribute.String;
    images: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface GalleryVideoGallery extends Schema.Component {
  collectionName: 'components_gallery_video_galleries';
  info: {
    displayName: 'Video Gallery';
    icon: 'apps';
  };
  attributes: {
    label: Attribute.String;
    title: Attribute.String;
    videos: Attribute.Media & Attribute.Required;
  };
}

export interface HomepageHomepageCta extends Schema.Component {
  collectionName: 'components_homepage_homepage_ctas';
  info: {
    displayName: 'Homepage CTA';
    icon: 'apps';
  };
  attributes: {
    label: Attribute.String;
    mainText: Attribute.String;
    ctaButtonLabel: Attribute.String;
  };
}

export interface PrimaCuttingOptionsTablePrima extends Schema.Component {
  collectionName: 'components_prima_cutting_options_table_primas';
  info: {
    displayName: 'Cutting Options Table - PRIMA';
    icon: 'grid';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    inoxLabel: Attribute.String;
    inoxCuttingOption: Attribute.String;
    steelLabel: Attribute.String;
    steelCuttingOption: Attribute.String;
    aluminiumLabel: Attribute.String;
    aluminiumCuttingOption: Attribute.String;
  };
}

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'SEO';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.String;
    keywords: Attribute.String;
    preventIndexing: Attribute.Boolean & Attribute.DefaultTo<false>;
    sharedImage: Attribute.Component<'shared.shared-image'>;
  };
}

export interface ServicesHomepageServices extends Schema.Component {
  collectionName: 'components_services_homepage_services_s';
  info: {
    displayName: 'Homepage Services ';
    icon: 'bulletList';
  };
  attributes: {
    serviceTitle: Attribute.String & Attribute.Required;
    serviceDescription: Attribute.String & Attribute.Required;
  };
}

export interface ServicesServiceFeatureListComponent extends Schema.Component {
  collectionName: 'components_services_service_feature_list_components';
  info: {
    displayName: 'Service Feature List Component';
    icon: 'bulletList';
  };
  attributes: {
    feature: Attribute.String;
  };
}

export interface ServicesServicesMainPageComponent extends Schema.Component {
  collectionName: 'components_services_services_main_page_components';
  info: {
    displayName: 'Services Main Page Component';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    serviceFeatureListComponent: Attribute.Component<
      'services.service-feature-list-component',
      true
    >;
    media: Attribute.Media & Attribute.Required;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedSharedImage extends Schema.Component {
  collectionName: 'components_shared_shared_images';
  info: {
    displayName: 'SharedImage';
    icon: 'apps';
  };
  attributes: {
    alt: Attribute.String;
    media: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-us-cta-component.about-us-call-to-action-component': AboutUsCtaComponentAboutUsCallToActionComponent;
      'contact-us.contact-us-address-info-component': ContactUsContactUsAddressInfoComponent;
      'contact-us.contact-us-description-component': ContactUsContactUsDescriptionComponent;
      'faq.faq-question-component': FaqFaqQuestionComponent;
      'faq.homepage-faq-list': FaqHomepageFaqList;
      'footer.address': FooterAddress;
      'footer.footer-more-links': FooterFooterMoreLinks;
      'footer.footer-newsletter': FooterFooterNewsletter;
      'footer.footer-social-media-links': FooterFooterSocialMediaLinks;
      'gallery.image-gallery': GalleryImageGallery;
      'gallery.video-gallery': GalleryVideoGallery;
      'homepage.homepage-cta': HomepageHomepageCta;
      'prima.cutting-options-table-prima': PrimaCuttingOptionsTablePrima;
      'seo.seo': SeoSeo;
      'services.homepage-services': ServicesHomepageServices;
      'services.service-feature-list-component': ServicesServiceFeatureListComponent;
      'services.services-main-page-component': ServicesServicesMainPageComponent;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'shared.shared-image': SharedSharedImage;
    }
  }
}
