export enum PageType {
  other,
  radicals,
  kanji,
  vocabulary,
  reviews,
  reviewsSummary,
  lessons,
  lessonsReviews
}

export function determinePageType(url: string): PageType {
  if (/\/radicals\/./.test(url)) {
    return PageType.radicals;
  } else if (/com\/kanji\/./.test(url)) {
    return PageType.kanji;
  } else if (/com\/vocabulary\/./.test(url)) {
    return PageType.vocabulary;
  } else if (/com\/review\/session/.test(url)) {
    return PageType.reviews;
  } else if (/com\/review/.test(url)) {
    return PageType.reviewsSummary;
  } else if (/com\/lesson\/./.test(url)) {
    return PageType.lessons;
  }

  // TODO: Figure out what URL lessonsReviews is for

  return PageType.other;
}
