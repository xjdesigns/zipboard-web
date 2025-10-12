export const STANDARD_TYPE = 'STANDARD'

// HTTP
const HTTP_CHECK = 'http://'
const HTTPS_CHECK = 'https://'
export const HTTP_TYPE = 'HTTP'

// Image
export const IMAGE_TYPE = 'IMAGE'

// Number w/ specials
export const NUMBER_TYPE = 'NUMBER'

// UUID
export const UUID_TYPE = 'UUID'

export const TYPE_OPTIONS = [STANDARD_TYPE, HTTP_TYPE, IMAGE_TYPE, NUMBER_TYPE, UUID_TYPE]

export function getItemType(text) {
  // regex values must live within the scope
  const IMAGE_CHECK = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i
  const NUMBER_CHECK = /^([0-9]|#|\+|\*|-|,|\s)+$/gm
  const UUID_CHECK = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/g
  let itemType = STANDARD_TYPE

  if (IMAGE_CHECK.test(text)) {
    itemType = IMAGE_TYPE
  }

  if (text.includes(HTTPS_CHECK) || text.includes(HTTP_CHECK)) {
    itemType = HTTP_TYPE
  }

  if (NUMBER_CHECK.test(text)) {
    itemType = NUMBER_TYPE
  }

  if (UUID_CHECK.test(text)) {
    itemType = UUID_TYPE
  }

  return itemType;
}

export function itemTypeDetect(item, isFavorite = false) {
  const itemType = getItemType(item)

  return {
    text: item,
    date: new Date().toLocaleDateString(),
    type: itemType,
    isFavorite
  }
}

export function filterHistoryByType(history, type, canDeleteFavorite) {
  let updated
  if (canDeleteFavorite) {
    updated = history.filter((h) => h.type !== type)
  } else {
    updated = history.filter((h) => h.type !== type || (h.type === type && h.isFavorite))
  }
  return updated
}

export const getDynamicListIcon = (type) => {
  if (type === STANDARD_TYPE) {
    return 'bag-plus-fill'
  }
  if (type === HTTP_TYPE) {
    return 'router-fill'
  }
  if (type === IMAGE_TYPE) {
    return 'image-fill'
  }
  if (type === NUMBER_TYPE) {
    return '1-square-fill'
  }
  if (type === UUID_TYPE) {
    return 'database-fill'
  }
  return ''
}
