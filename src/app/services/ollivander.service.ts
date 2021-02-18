import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OllivanderService {

  wands: Array<Wand> = [
    {
        id: 1,
        wood: 'Holly',
        core: 'Phoenix feather',
        woodDescription: 'Holly is one of the rarer kinds of wand woods; traditionally considered protective, it works most happily for those who may need help overcoming a tendency to anger and impetuosity.',
        coreDescription: 'This is one of the rarest core types.[1] Phoenix feathers are capable of the greatest range of magic, though they may take longer than either unicorn hair or dragon heartstring cores to reveal this. ',
        imgUrl: 'https://vignette.wikia.nocookie.net/harrypotter/images/c/ca/HarryPotterWandNN8415.jpg',
    },
    {
        id: 2,
        wood: 'Ash',
        core: 'Unicorn hair',
        woodDescription: 'The ash wand clings to its one true master and ought not to be passed on or gifted from the original owner, because it will lose power and skill.',
        coreDescription: 'Wands with unicorn hair cores are the most difficult to turn to the Dark Arts and produce the most consistent magic',
        imgUrl: 'https://vignette.wikia.nocookie.net/harrypotter/images/8/8c/Ron_weasley_first_wand.jpg',
    },
    {
        id: 3,
        wood: 'Vinewood',
        core: 'Dragon heartstring',
        woodDescription: 'Vine wands are among the less common types, and their owners are nearly always those witches or wizards who seek a greater purpose, who have a vision beyond the ordinary.',
        coreDescription: 'Dragon heartstrings produce wands with the most magic power, and which are capable of the most flamboyant spells.',
        imgUrl: 'https://vignette.wikia.nocookie.net/harrypotter/images/c/c6/HermioneGrangerWandNN8411.jpg',
    },
    {
        id: 4,
        wood: 'Hawthorn',
        core: 'Unicorn hair',
        woodDescription: 'Hawthorn makes a strange, contradictory wand, as full of paradoxes as the tree that gave it birth.',
        coreDescription: 'Wands with unicorn hair cores are the most difficult to turn to the Dark Arts and produce the most consistent magic',
        imgUrl: 'https://vignette.wikia.nocookie.net/harrypotter/images/3/39/DracoMalfoyWandNN8409.jpg',
    },
    {
        id: 5,
        wood: 'Elder',
        core: 'Unicorn hair',
        woodDescription: 'The rarest wand wood of all, and reputed to be deeply unlucky, elder wands are trickier to master than any other.',
        coreDescription: 'It is assumed that one must be able to see Thestrals in order to utilise their hair, and since one must witness death first-hand to see a Thestral, anyone wishing to forge a wand with the hair must witness death.',
        imgUrl: 'https://vignette.wikia.nocookie.net/harrypotter/images/5/59/Elder_Wand.png',
    },
];


  constructor() { }
}
