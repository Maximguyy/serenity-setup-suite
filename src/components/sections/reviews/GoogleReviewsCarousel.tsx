import { Star } from 'lucide-react';
import { clientConfig } from '@/config/client-config';
import { SectionWrapper, SectionTitle } from '@/components/core';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const GoogleReviewsCarousel = () => {
  const { reviews, social } = clientConfig;

  return (
    <SectionWrapper id="avis" background="light" className="hidden py-8 md:block md:py-10 lg:py-12">
      <SectionTitle
        title={reviews.sectionTitle}
        subtitle={reviews.sectionSubtitle}
        className="mb-5 md:mb-7"
      />

      {/* Google Rating Badge */}
      <div className="mb-5 flex items-center justify-center gap-3">
        <img
          src={reviews.googleLogo}
          alt="Google Reviews"
          className="h-16 w-auto"
        />
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.floor(reviews.averageRating)
                    ? 'fill-accent text-accent'
                    : 'fill-muted text-muted'
                }`}
              />
            ))}
          </div>
          <span className="font-heading text-lg font-semibold text-foreground">
            {reviews.averageRating}/5
          </span>
          <span className="text-secondary">
            ({reviews.totalReviews} avis)
          </span>
        </div>
      </div>

      {/* Reviews Carousel */}
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="mx-auto w-full max-w-5xl"
      >
        <CarouselContent className="-ml-4">
          {reviews.featured.map((review, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <Card className="h-full border-none bg-white shadow-md">
                <CardContent className="flex h-full flex-col p-6">
                  {/* Stars */}
                  <div className="mb-3 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? 'fill-accent text-accent'
                            : 'fill-muted text-muted'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="mb-4 flex-1 font-body text-sm leading-relaxed text-secondary">
                    "{review.text}"
                  </p>

                  {/* Author & Date */}
                  <div className="mt-auto border-t border-border pt-4">
                    <p className="font-heading text-sm font-semibold text-foreground">
                      {review.author}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {review.date}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 -translate-x-1/2 border-accent/20 bg-white text-accent hover:bg-accent hover:text-white md:-left-4" />
        <CarouselNext className="right-0 translate-x-1/2 border-accent/20 bg-white text-accent hover:bg-accent hover:text-white md:-right-4" />
      </Carousel>

      {/* CTA */}
      <div className="mt-5 text-center">
        <a
          href={social.google}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-body text-sm text-accent underline-offset-4 transition-colors hover:text-accent/80 hover:underline"
        >
          {reviews.ctaText}
        </a>
      </div>
    </SectionWrapper>
  );
};

export default GoogleReviewsCarousel;
