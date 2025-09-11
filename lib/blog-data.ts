export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  slug: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "preparing-for-birth-in-portugal",
    title: "Preparing for Birth in Portugal: A Guide for Expat Families",
    excerpt:
      "Essential information about birthing options, hospital systems, and cultural considerations for international families in Portugal.",
    content: `
# Preparing for Birth in Portugal: A Guide for Expat Families

Moving to a new country during pregnancy can feel overwhelming, especially when navigating a different healthcare system. As an English-speaking family in Portugal, you have several excellent options for your birth experience.

## Understanding the Portuguese Healthcare System

Portugal has both public (SNS) and private healthcare systems. The public system provides excellent maternity care, while private options offer more personalized service and often better English-language support.

### Public Hospitals in Portugal
- **Centro Hospitalar Universitário de São João** - Large teaching hospital with modern facilities
- **Centro Hospitalar do Porto** - Multiple locations with comprehensive maternity services

### Private Options
- **Hospital da Luz** - Known for excellent English-speaking staff
- **CUF Porto Hospital** - Modern facilities with international patient services

## Birth Planning Considerations

When creating your birth plan in Portugal, consider:
- Pain management options available
- Visitor policies (especially important for partners)
- Newborn procedures and timing
- Discharge protocols

## Cultural Differences to Expect

Portuguese birth culture tends to be more medicalized than some other countries, but this is changing. Don't hesitate to discuss your preferences with your healthcare provider.

## Getting Support

Having a bilingual midwife can bridge cultural and language gaps, ensuring you feel confident and supported throughout your birth experience.
    `,
    author: "MaternoNest Team",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Birth Planning",
    image: "/blog-1.png",
  },
  {
    id: "2",
    slug: "breastfeeding-support-Portugal",
    title: "Breastfeeding Support Resources in Portugal",
    excerpt:
      "Comprehensive guide to lactation support, breastfeeding groups, and resources available for new mothers in Portugal.",
    content: `
# Breastfeeding Support Resources in Portugal

Starting your breastfeeding journey in a new country can feel challenging. Portugal offers excellent resources for nursing mothers, and knowing where to find support can make all the difference.

## Professional Lactation Support

### Certified Lactation Consultants
- International Board Certified Lactation Consultants (IBCLCs) available in Portugal
- Many speak English and understand international perspectives on breastfeeding

### Hospital Support
Most Portugal hospitals have lactation consultants on staff who can help with:
- Initial latch and positioning
- Addressing early challenges
- Pumping guidance for working mothers

## Community Support Groups

### English-Speaking Groups
- **Portugal Mums** - Active Facebook group with regular meetups
- **International Women of Portugal** - Includes breastfeeding support circle
- **La Leche League Portugal** - Some meetings conducted in English

### Portuguese Groups
- **Associação Portuguesa de Apoio ao Aleitamento Materno** - National breastfeeding support organization

## Practical Resources

### Where to Buy Supplies
- **Farmácias** - All carry basic breastfeeding supplies
- **Chicco stores** - Multiple locations in Portugal
- **Online options** - Amazon.es delivers to Portugal

### Breastfeeding-Friendly Spaces
Portugal is generally breastfeeding-friendly, with most cafés and public spaces welcoming nursing mothers.

## Common Challenges and Solutions

Every breastfeeding journey is unique. Having professional support that understands both Portuguese healthcare practices and international perspectives can be invaluable.
    `,
    author: "MaternoNest Team",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "Postnatal Care",
    image: "/blog-2.png",
  },
  {
    id: "3",
    slug: "prenatal-nutrition-mediterranean-diet",
    title: "Prenatal Nutrition: Embracing the Mediterranean Diet in Portugal",
    excerpt:
      "How to optimize your pregnancy nutrition using Portugal's abundant fresh, local ingredients and Mediterranean dietary principles.",
    content: `
# Prenatal Nutrition: Embracing the Mediterranean Diet in Portugal

Portugal's location and climate provide access to some of the world's best ingredients for a healthy pregnancy. The Mediterranean diet, naturally prevalent here, offers excellent nutrition for expecting mothers.

## Benefits of Mediterranean Diet During Pregnancy

Research shows the Mediterranean diet during pregnancy can:
- Reduce risk of gestational diabetes
- Support healthy fetal brain development
- Provide essential omega-3 fatty acids
- Maintain healthy weight gain

## Portuguese Pregnancy Superfoods

### Fresh Seafood
Portugal's coastline provides excellent sources of:
- **Sardines** - High in omega-3s and calcium
- **Cod** - Lean protein and B vitamins
- **Shellfish** - Iron and zinc (when properly cooked)

*Always ensure seafood is well-cooked during pregnancy*

### Seasonal Produce
- **Oranges** - Vitamin C and folate
- **Kale (Couve)** - Iron and folate
- **Tomatoes** - Lycopene and vitamin C
- **Olive oil** - Healthy fats and vitamin E

## Navigating Portuguese Markets

### Mercado do Bolhão
Portugal's historic market offers:
- Fresh, seasonal produce
- Local specialties
- Opportunity to practice Portuguese

### Supermarket Tips
- **Continente** and **Pingo Doce** have excellent fresh sections
- Look for "Bio" labels for organic options
- Many staff speak some English

## Foods to Enjoy and Avoid

### Pregnancy-Safe Portuguese Dishes
- **Caldo Verde** - Nutritious kale soup
- **Grilled fish** - Excellent protein source
- **Fresh fruit** - Abundant and affordable

### Foods to Limit
- **Soft cheeses** - Unless pasteurized
- **Raw seafood** - Including some traditional preparations
- **High-mercury fish** - Limit large fish consumption

## Staying Hydrated

Portugal's climate requires extra attention to hydration. Portuguese tap water is safe and high-quality in most areas.

## Getting Nutritional Support

Working with a healthcare provider who understands both Portuguese food culture and international dietary preferences can help you create the perfect pregnancy nutrition plan.
    `,
    author: "MaternoNest Team",
    date: "2024-01-01",
    readTime: "10 min read",
    category: "Prenatal Care",
    image: "/blog-3.png",
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category)
}
