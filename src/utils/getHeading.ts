const getHeading = (activeId: string) => {
  const headingElements = document.querySelectorAll("h1, h2, h3")
  const headings = Array.from(headingElements).map(headingElement => ({
    id: headingElement.getAttribute("id") || "",
    text: headingElement.textContent || "",
    level: Number(headingElement.tagName.charAt(1)),
    focus: headingElement.getAttribute("id") === activeId,
  }))

  return headings
}

export default getHeading
