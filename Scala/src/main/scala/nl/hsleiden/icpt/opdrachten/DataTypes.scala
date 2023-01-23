package nl.hsleiden.icpt.opdrachten

import scala.annotation.tailrec

sealed trait Dier

// Sum type en product type.
case class Kat(naam: String, leeftijd: Int) extends Dier
case class Hond(naam: String, ras: String, leeftijd: Int) extends Dier

/**
 * Gebruik voor de gehele klasse pattern matching en recursie
 * Bonus punten als je tail recursie kan toevoegen
 */
object DataTypes {

  /**
   * Bereken hoeveel honden in een gegeven sequentie zitten.
   * Gebruik hiervoor pattern matching en recursie
   *
   * @param dieren => De lijst met dieren
   * @return Hoeveelheid honden die hierin zitten
   */
  def hoeveelheidHonden(dieren: Seq[Dier]): Int = dieren match {
    case Seq() => 0
    case Hond(_, _, _)::tail => 1 + hoeveelheidHonden(tail)
    case _::tail => hoeveelheidHonden(tail)
  }

  /**
   * Tel hoeveel honden er in het lijstje zitten die 1 zijn.
   *
   * @param dier
   * @return
   */
  @tailrec def hoeveelHeidHondenZijnEen(dier: Seq[Dier], resultaat: Int = 0) : Int = dier match {
    case Seq() => resultaat
    case Hond(_, _, 1)::tail => hoeveelHeidHondenZijnEen(tail, resultaat + 1)
    case _::tail => hoeveelHeidHondenZijnEen(tail, resultaat)
  }

  /**
   * Tel de totale leeftijd van alle honden op.
   * @param dier
   * @return
   */
  def totaleLeeftijdHonden(dier:Seq[Dier]): Int = dier match {
    case Seq() => 0
    case Hond(_, _, leeftijd)::tail => leeftijd + totaleLeeftijdHonden(tail)
    case _::tail => totaleLeeftijdHonden(tail)
  }


  /**
   * Reken de leeftijd van alle labradors bij elkaar!
   *
   * @param dier
   * @param resultaat
   * @return
   */
  @tailrec def totaleLeeftijdLabradors(dier: Seq[Dier], resultaat: Int = 0): Int = dier match {
    case Seq() => resultaat
    case Hond(_, "Labrador", leeftijd)::tail => totaleLeeftijdLabradors(tail, resultaat + leeftijd)
    case _::tail => totaleLeeftijdLabradors(tail, resultaat)
  }


}


