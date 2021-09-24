<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet
          xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
          version="1.0">
     <xsl:template match="/students">
          <html>
               <header>
                    <link rel="stylesheet" type="text/css" href="students.css"/>
               </header>
               <body>
                    <div class="container">
                         <div class="item header">Description</div>
                         <div class="item header">Amount</div>
                         <xsl:for-each select="cargospace/cargo">
                              <div class="item">
                                   <xsl:value-of select="current()"/>
                              </div>
                              <div class="item">
                                   <xsl:value-of select="@amount"/>
                              </div>
                         </xsl:for-each>
                    </div>
               </body>
          </html>
     </xsl:template>
</xsl:stylesheet>
