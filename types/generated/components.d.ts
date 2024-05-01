import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutUsComponentWithImagesAboutUsComponentWithImages
  extends Schema.Component {
  collectionName: 'components_about_us_component_with_images_about_us_component_with_images';
  info: {
    displayName: 'About Us Component with Images';
    icon: 'apps';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

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

export interface FooterLink extends Schema.Component {
  collectionName: 'components_footer_links';
  info: {
    displayName: 'Link';
    icon: 'bulletList';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
  };
}

export interface FooterMoreLinks extends Schema.Component {
  collectionName: 'components_footer_more_links';
  info: {
    displayName: 'More Links';
    icon: 'bulletList';
  };
  attributes: {
    linkValue: Attribute.Component<'footer.link', true>;
  };
}

export interface FooterSocialNetworkLinks extends Schema.Component {
  collectionName: 'components_footer_social_network_links';
  info: {
    displayName: 'Social Network Links';
    icon: 'bulletList';
  };
  attributes: {
    termsLabel: Attribute.String & Attribute.Required;
  };
}

export interface FooterSocialNetwork extends Schema.Component {
  collectionName: 'components_footer_social_networks';
  info: {
    displayName: 'Social Network';
    icon: 'bulletList';
  };
  attributes: {
    socialNetworkLinks: Attribute.Component<
      'footer.social-network-links',
      true
    >;
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-us-component-with-images.about-us-component-with-images': AboutUsComponentWithImagesAboutUsComponentWithImages;
      'about-us-cta-component.about-us-call-to-action-component': AboutUsCtaComponentAboutUsCallToActionComponent;
      'contact-us.contact-us-address-info-component': ContactUsContactUsAddressInfoComponent;
      'contact-us.contact-us-description-component': ContactUsContactUsDescriptionComponent;
      'faq.faq-question-component': FaqFaqQuestionComponent;
      'faq.homepage-faq-list': FaqHomepageFaqList;
      'footer.address': FooterAddress;
      'footer.link': FooterLink;
      'footer.more-links': FooterMoreLinks;
      'footer.social-network-links': FooterSocialNetworkLinks;
      'footer.social-network': FooterSocialNetwork;
      'prima.cutting-options-table-prima': PrimaCuttingOptionsTablePrima;
      'services.homepage-services': ServicesHomepageServices;
      'services.service-feature-list-component': ServicesServiceFeatureListComponent;
      'services.services-main-page-component': ServicesServicesMainPageComponent;
    }
  }
}
