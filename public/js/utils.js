export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    timeZone: "UTC",
  })
}

export function formatProducts(products, {
  filterOutActive = true,
  limit = undefined,
} = {}) {

  const filteredProducts = products.reduce((acc, product) => {
    const { date, active } = product.frontmatter;
    // filterOutDrafts if true
    if (filterOutActive && !active) return acc;

    // add product to acc
    acc.push(product)

    return acc;
  }, [])



  // limit if number is passed
  if (typeof limit === "number") {
    return filteredProducts.slice(0, limit);
  }
  return filteredProducts;

}