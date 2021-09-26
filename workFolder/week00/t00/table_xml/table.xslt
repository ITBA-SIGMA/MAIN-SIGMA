<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
  <h2 style="text-align:center">Порівняльня таблиця HTML, XML, MD, JSON</h2>
  <table border="1">
    <tr bgcolor="#98FB98">
      <th style="text-align:center">Основа для порівняння</th>
      <th style="text-align:center">HTML</th>
      <th style="text-align:center">XML</th>
      <th style="text-align:center">MD</th>
      <th style="text-align:center">JSON</th>
    </tr>
    <xsl:for-each select="table/cont">
    <tr bgcolor="#F0E68C">
      <td style="text-align:center"><xsl:value-of select="title"/></td>
      <td style="text-align:center"><xsl:value-of select="HTML"/></td>
      <td style="text-align:center"><xsl:value-of select="XML"/></td>
      <td style="text-align:center"><xsl:value-of select="MD"/></td>
      <td style="text-align:center"><xsl:value-of select="JSON"/></td>
    </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>