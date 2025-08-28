import type { Schema, Struct } from '@strapi/strapi';

export interface CertificationLogoCertificationLogo
  extends Struct.ComponentSchema {
  collectionName: 'components_certification_logo_certification_logos';
  info: {
    displayName: 'certification_logo';
  };
  attributes: {
    logoImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    logoText: Schema.Attribute.String;
  };
}

export interface CertificationLogoLogos extends Struct.ComponentSchema {
  collectionName: 'components_certification_logo_logos';
  info: {
    displayName: 'logos';
  };
  attributes: {
    logoImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    logoText: Schema.Attribute.String;
  };
}

export interface CertifiedBySectionCertifiedBySection
  extends Struct.ComponentSchema {
  collectionName: 'components_certified_by_section_certified_by_sections';
  info: {
    displayName: 'certified_by_section';
  };
  attributes: {
    logos: Schema.Attribute.Component<'certification-logo.logos', true>;
    title: Schema.Attribute.String;
  };
}

export interface CtaSectionCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_cta_section_cta_sections';
  info: {
    displayName: 'cta_section';
  };
  attributes: {
    adress: Schema.Attribute.Text;
    contactPersonName: Schema.Attribute.String;
    googleMapsEmbedUrl: Schema.Attribute.Text;
    instagramHandle: Schema.Attribute.String;
    phoneNumber: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    whatsappNumber: Schema.Attribute.String;
  };
}

export interface HeroBannerHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_hero_banner_hero_banners';
  info: {
    displayName: 'hero_banner';
    icon: 'cog';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    heading: Schema.Attribute.String;
    primaryButtonText: Schema.Attribute.String;
    secondaryButtonText: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
    tertiaryButtonText: Schema.Attribute.String;
    whatsappNumber: Schema.Attribute.String;
  };
}

export interface IngredientItemIngredientItem extends Struct.ComponentSchema {
  collectionName: 'components_ingredient_item_ingredient_items';
  info: {
    displayName: 'ingredient_item';
  };
  attributes: {
    description: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface JourneyCardCards extends Struct.ComponentSchema {
  collectionName: 'components_journey_card_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    storyText: Schema.Attribute.Text;
  };
}

export interface JourneyCardJourneyCard extends Struct.ComponentSchema {
  collectionName: 'components_journey_card_journey_cards';
  info: {
    displayName: 'journey_card';
  };
  attributes: {
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface JourneySectionJourneySection extends Struct.ComponentSchema {
  collectionName: 'components_journey_section_journey_sections';
  info: {
    displayName: 'journey_section';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    cards: Schema.Attribute.Component<'journey-card.cards', true>;
    title: Schema.Attribute.String;
  };
}

export interface NavLinkNavLink extends Struct.ComponentSchema {
  collectionName: 'components_nav_link_nav_links';
  info: {
    displayName: 'nav-link';
  };
  attributes: {
    linkPath: Schema.Attribute.String;
    linkText: Schema.Attribute.String;
  };
}

export interface OwnerStorySectionOwnerStorySection
  extends Struct.ComponentSchema {
  collectionName: 'components_owner_story_section_owner_story_sections';
  info: {
    displayName: 'owner_story_section';
  };
  attributes: {
    afterImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    beforeImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    signature: Schema.Attribute.String;
    storyParagraph: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SocialLinkSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_social_link_social_links';
  info: {
    displayName: 'social_link';
  };
  attributes: {
    platform: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface StoryHighlightsSectionStoryHighlightsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_story_highlights_section_story_highlights_sections';
  info: {
    displayName: 'story_highlights_section';
  };
  attributes: {
    stories: Schema.Attribute.Component<'story-item.stories', true>;
  };
}

export interface StoryItemStories extends Struct.ComponentSchema {
  collectionName: 'components_story_item_stories';
  info: {
    displayName: 'stories';
  };
  attributes: {
    contentImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    name: Schema.Attribute.String;
    profileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface StoryItemStoryItem extends Struct.ComponentSchema {
  collectionName: 'components_story_item_story_items';
  info: {
    displayName: 'story_item';
  };
  attributes: {
    contentImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    name: Schema.Attribute.String;
    profileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface TestimonialsItemTestimonialItem
  extends Struct.ComponentSchema {
  collectionName: 'components_testimonials_item_testimonial_items';
  info: {
    displayName: 'testimonial_item';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
  };
}

export interface TestimonialsSectionTestimonialsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_testimonials_section_testimonials_sections';
  info: {
    displayName: 'testimonials_section';
  };
  attributes: {
    testimonials: Schema.Attribute.Component<
      'testimonials-item.testimonial-item',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface WhyChooseUsSectionWhyChooseUsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_why_choose_us_section_why_choose_us_sections';
  info: {
    displayName: 'why_choose_us_section';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    ingredients: Schema.Attribute.Component<
      'ingredient-item.ingredient-item',
      true
    >;
    mainImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    popupContent: Schema.Attribute.Text;
    popupSignature: Schema.Attribute.String;
    popupTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'certification-logo.certification-logo': CertificationLogoCertificationLogo;
      'certification-logo.logos': CertificationLogoLogos;
      'certified-by-section.certified-by-section': CertifiedBySectionCertifiedBySection;
      'cta-section.cta-section': CtaSectionCtaSection;
      'hero-banner.hero-banner': HeroBannerHeroBanner;
      'ingredient-item.ingredient-item': IngredientItemIngredientItem;
      'journey-card.cards': JourneyCardCards;
      'journey-card.journey-card': JourneyCardJourneyCard;
      'journey-section.journey-section': JourneySectionJourneySection;
      'nav-link.nav-link': NavLinkNavLink;
      'owner-story-section.owner-story-section': OwnerStorySectionOwnerStorySection;
      'social-link.social-link': SocialLinkSocialLink;
      'story-highlights-section.story-highlights-section': StoryHighlightsSectionStoryHighlightsSection;
      'story-item.stories': StoryItemStories;
      'story-item.story-item': StoryItemStoryItem;
      'testimonials-item.testimonial-item': TestimonialsItemTestimonialItem;
      'testimonials-section.testimonials-section': TestimonialsSectionTestimonialsSection;
      'why-choose-us-section.why-choose-us-section': WhyChooseUsSectionWhyChooseUsSection;
    }
  }
}
