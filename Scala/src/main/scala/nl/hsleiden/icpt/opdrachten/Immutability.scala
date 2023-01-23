package nl.hsleiden.icpt.opdrachten

import scala.annotation.tailrec

object Immutability {

  /**
   * Programmeer de faculteit.
   * Dit is door de reeks optellend met elkaar te vermenigvuldigen tot 2.
   * Bijvoorbeeld n = 5
   * Bonuspunten als je tailrecursie gebruikt
   * 5 * 4 * 3 * 2 => Antwoord  120
   * @param n
   * @return
   */
  @tailrec def faculty(n: Int, resultaat: Int = 1): Int = {
    if (n == 1) {
      return resultaat
    }
    faculty(n - 1, resultaat * n)
  }


  /**
   * Met deze functie maken we onze eigen machten verheffen. Java (Math.pow)
   * Doe dit recursief.
   * * Bonuspunten. Zorg dat deze functie geannoteerd kan worden met @tailrec
   * @param n
   * @return
   */
  def pow(lh: Int, rh: Int): Double = {
    if (rh == 0) {
      return 1
    }
    lh * pow(lh, rh - 1)
  }


}
