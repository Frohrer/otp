const add_page_number = async (pdfObject) => {
	const pages = await pdfObject.pdfDoc.getPages();
	for (const [i, page] of Object.entries(pages)) {
		page.drawText(`${+i + 1}`, {
			x: page.getWidth() / 2,
			y: 10,
			size: 15,
			font: pdfObject.timesRomanFont,
			color: pdfObject.rgb(0, 0, 0)
		});
	}
	return pdfObject
}

module.exports = { add_page_number }
