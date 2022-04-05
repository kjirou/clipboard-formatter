navigator.clipboard.readText()
  .then(async (clipText) => {
    const formattedText = clipText
      .replaceAll(/(\r\n|\r|\n)/g, ' ')
      .replaceAll(/\. */g, '.\n')
    return navigator.clipboard.writeText(formattedText)
  })
