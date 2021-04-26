import { Component, OnInit } from '@angular/core';
import { ImageContent } from 'src/app/Model.Global/ImageContent';

@Component({
  selector: 'app-differente-hypnose',
  templateUrl: './differente-hypnose.component.html',
  styleUrls: ['./differente-hypnose.component.css']
})
export class DifferenteHypnoseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public listImageContent: Array<ImageContent> = [
    {
      image:'../../../assets/hypnose1.jpg',
      name:'image hypnose perte de poids',
      title:"HYPNOSE THERAPEUTIQUE",
      content:"L’hypnose thérapeutique considère le corps et l'esprit comme un tout où la mobilité corporelle va de pair avec le vécu émotionnel et la pensée. L\’hypnose thérapeutique incite la personne à lâcher prise par rapport aux blocages que son mental a installés, ce qui facilite la déprogrammation des anciens schémas de pensées négatives et la reconnexion à ses ressources profondes et sa sagesse intérieure. Les informations d’événements difficiles peuvent aussi être stockées dans la mémoire tissulaire. Grâce à l état de transe hypnotique et le contact thérapeutique du corps en tension, le thérapeute peut ainsi réveiller ces souvenirs et faciliter la communication entre l\'esprit, l\'émotion et le corps de la personne. Celle-ci entre alors en contact avec son « savoir intérieur »."
    },
    {
      image:'https://cdn.pixabay.com/photo/2019/03/10/08/32/hypnosis-4045657_960_720.jpg',
      name:'image hypnose confiance en soi',
      title:'HYPNOSE COMPORTEMENTAL',
      content:'Cet état modifié de conscience se caractérise par une profonde relaxation en même temps qu’une concentration très forte et une suggestibilité beaucoup plus grande que dans l’état d’éveil ordinaire. Dans cet état de suggestibilité particulier, il est donc possible de faire des propositions de changements qui seront prises par l’inconscient avec beaucoup plus de facilités étant donné que le cerveau ne fait pas la différence entre la réalité et ce que nous imaginons. Dans cet état de transe, nous avons accès à l’inconscient et à tout son potentiel. Celui-ci mettra tout en œuvre pour trouver les solutions les plus adéquates en rapport avec l’objectif de la séance.'
    },
    {
      image:'https://cdn.pixabay.com/photo/2013/01/20/20/20/hypnosis-75615_960_720.jpg',
      name:'auto hypnose',
      title:'HYPNOSE SOMATO-MOTIONELLE',
      content:'C’est une hypnose conversationnelle où le patient n’est pas endormi mais bien dans un état modifié de conscience dans lequel il est capable de contrôler son système nerveux autonome. C’est ainsi que l’on obtient les meilleurs résultats. La relation établie entre le thérapeute et le patient est une relation d’égal à égal où le patient est parfaitement conscient de tout ce qui se dit et participe activement à la désensibilisation de son traumatisme. Le patient est invité à expérimenter les propositions que lui fait le thérapeute et à mettre en œuvre ses propres idées qui lui permettront de désensibiliser ses traumatismes. La volonté est de travailler les traumatismes avec le minimum de douleur.'
    }
  ]

}
