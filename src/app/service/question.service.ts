// tslint:disable: max-line-length
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Question } from '../model/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  list$: Observable<Question[]> = of([
    new Question(1, 'Gyakran vállalok indokolt kockázatot, ha úgy érzem, hogy érdemes.', false),
    new Question(2, 'A problémákat lépésről-lépésre oldom meg, kerülöm a szeszélyes ötleteket.', false),
    new Question(3, 'Arról vagyok híres, hogy értelmes, közvetlen a stílusom.', false),
    new Question(4, 'Gyakran az az érzésem, hogy az érzelmeken alapuló cselekvés ugyanolyan helytálló, mint a körültekintő gondolkodáson és elemzésen alapuló cselekvés.', false),
    new Question(5, 'Egy ötlet vagy megoldási javaslat megítélésében az a kulcstényező, hogy működik-e az a gyakorlatban vagy nem.', false),
    new Question(6, 'Amikor egy új ötlettel vagy megközelítéssel foglalkozom. szívesen kezdek azon dolgozni, hogyan lehetne mielőbb a gyakorlatban megvalósítani.', false),
    new Question(7, 'Szeretem a fegyelmezett magatartást, az egyértelmű eljárások kialakítását és a logikus gondolkodásmódot.', false),
    new Question(8, 'Büszke vagyok arra, hogy alapos, módszeres munkát végzek.', false),
    new Question(9, 'A logikus gondolkodású, elemző típusú emberekkel jövök ki a legjobban, a spontán, irracionális emberekkel pedig a legkevésbé.', false),
    new Question(10, 'A rendelkezésemre álló adatok értelmezésével foglalkozom, kerülöm a következtetések azonnali levonását.', false),
    new Question(11, 'Sok alternatíva mérlegelése után szeretek körültekintően eljutni a döntéshozatalig.', false),
    new Question(12, 'Jobban vonzanak az új, szokatlan gondolatok, mint a praktikus elképzelések.', false),
    new Question(13, 'Nem szeretem azokat a helyzeteket, amelyeket nem tudok beilleszteni egy összefüggő rendszerbe.', false),
    new Question(14, 'Szívesen igazítom tetteimet az általános gyakorlathoz.', false),
    new Question(15, 'Az értekezleteken arról vagyok híres, hogy rögtön a tárgyra térek, függetlenül attól, hogy mások mit éreznek.', false),
    new Question(16, 'Azt szeretem, ha minél több információforrás áll a rendelkezésemre – minél több a megfontolandó adat, annál jobb.', false),
    new Question(17, 'Rendszerint idegesítenek azok az emberek, akik nem veszik komolyan a dolgokat.', false),
    new Question(18, 'Jobban szeretek spontán módon, rugalmasan reagálni a dolgokra annál, hogy jóval előre megtervezzen a dolgokat.', false),
    new Question(19, 'Nagyon nem szeretem azt, ha szoros határidőn belül kell következtetéseimet előterjeszteni, amikor több időt tölthettem volna a problémákon való elgondolkozáson.', false),
    new Question(20, 'Mások gondolatait rendszerint azok gyakorlati értéke szerint ítélem meg.', false),
    new Question(21, 'Gyakran felidegesítenek azok az emberek, akik fejest akarnak ugrani a dolgokba.', false),
    new Question(22, 'A jelen sokkal fontosabb annál, hogy a múlton vagy a jövőn töprengjünk.', false),
    new Question(23, 'Úgy gondolom, hogy az összes információ mélyreható elemzésén alapuló döntések alaposabbak, mint a megérzésen alapuló döntések.', false),
    new Question(24, 'Az értekezleteken szívesen elmondom a gondolataimat, és másokét is szívesen meghallgatom.', false),
    new Question(25, 'Általában hajlamos vagyok arra, hogy a kelleténél többet beszéljek, ki kellene alakítani a hallgatási képességemet.', false),
    new Question(26, 'Az értekezleteken nagyon türelmetlenné válok azokkal az emberekkel szemben, akik szem elől tévesztik a célkitűzéseket.', false),
    new Question(27, 'Élvezem, ha közölhetem másokkal a gondolataimat és a véleményemet.', false),
    new Question(28, 'Az értekezleteken az embereknek reálisaknak kellene lenniük, a tárgyhoz kellene ragaszkodniuk, és kerülniük kellene a különleges gondolatok és elképzelések felvetését.', false),
    new Question(29, 'Mielőtt meghozom döntésemet, sok alternatívát szeretek fontolóra venni.', false),
    new Question(30, 'Ha arra gondolok, hogy az értekezleteken hogyan reagálnak a kollégáim a dolgokra, szerintem én sokkal objektívebb és érzelem mentesebb vagyok.', false),
    new Question(31, 'Az értekezleteken szívesebben maradok a háttérben, ahelyett, hogy én irányítsam a vitát és én beszéljek a legtöbbet.', false),
    new Question(32, 'Általában szívesebben hallgatok, mint beszélek.', false),
    new Question(33, 'Legtöbbször úgy gondolom, hogy a cél szentesíti az eszközt.', false),
    new Question(34, 'A csoport céljainak és célkitűzéseinek az elérése fontosabb a személyes érzéseknél és céloknál.', false),
    new Question(35, 'A munkát akkor végzem el, amikor azt szükségesnek tartom.', false),
    new Question(36, 'Gyorsan megunom a módszeres részletes munkát.', false),
    new Question(37, 'Örömmel kutatom az alapvető feltételezéseket, valamint a dolgokat és az eseményeket alátámasztó elveket és elméleteket.', false),
    new Question(38, 'Szeretem, ha az értekezletek a kitűzött napirend betartásával módszeresen zajlanak le.', false),
    new Question(39, 'Nagy ívben kerülöm a szubjektív és a kétértelmű témákat.', false),
    new Question(40, 'Élvezem a krízisből adódó drámai helyzetet és izgalmat.', false),
  ]);

  constructor() { }
}
