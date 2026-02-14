

# The Harmonic Sytem

  The Harmonic System is a new way to think about music theory. It makes analyzing, transcribing and understanding harmony easier. Its simple to use and can be seen as a replacement for Roman Numeral Analysis.

  Although its not required to know a lot about music theory to use the Harmonic System, this article aims to explain the system for people who already have a basic understanding of music theory. 

### How does it work?
  The idea is to use numbers as names for the notes, instead of the traditional letters (C, C#, D, D#...) or syllables (do, re, mi, ...). Each note is assigned a number from $0$ to $11$ in the following way: 

  ![Piano octave with new note labels](scripts/piano-octave.svg)

  *Figure 1: Piano octave with new note labels*

  Note that the notes are not labeled in order. Instead two notes which are $7$ semitones (one fifth) apart, always have labels differing by $1$. For example, $C$ and $G$ are a fifth apart, and their labels are $4$ and $5$. Lets call these labels "harmonic labels".

  Another observation we can make is that that going up by $2$ semitones corresponds to adding $2$ to the harmonic label. This nice "coincidence" makes learning the new note labels easier. 

  To use the system effectively, you need to memorize the new note labels. But it will pay off, because the new labels reveal the underlying harmonic structure of music. 
  Now lets see how this system simplifies traditional music theory concepts. 

### Circle of fifths

  The concept of ordering the notes in steps of fifths is not new at all. In fact, the circle of fifths is a well-known concept in music theory. The way we label the notes in the Harmonic System turns the circle of fifths into a simple circle of numbers like a clock.

  ![Circle of fifths with new note labels](scripts/circle-of-fifths.svg)

  *Figure 2: The circle of fifth turns into a simple clock of numbers with the new note labels*

  This means by memorizing the harmonic labels, you have also memorized the circle of fifths! 

### The major scale

  When learning about music theory, it was very unclear to me why the major scale has the specific pattern of whole and half steps that it has. (whole, whole, half, whole, whole, whole, half). Why not a different pattern? 

  It turns out that this gets much clearer in the Harmonic System. 
  As an example, consider the C-major scale, consisting of the notes C, D, E, F, G, A and B which have the new labels $4$, $6$, $8$, $9$, $5$, $7$ and $9$ respectively. 
  These are actually just $7$ **consecutive numbers** from $3$ to $9$! The pattern of whole and half steps in the major scale is just a consequence of the fact that the harmonic labels of the notes in the major scale are consecutive numbers. Similarly, any other major scale also consists of $7$ consecutive numbers. The root note, in this case C $= 4$, is always the second number in the sequence.

  This observation maybe clarifies a bit, why labelling the notes in steps of fifths is so useful. The major scale was not explicitly designed to have this nice property - its just notes that sound good together. 
  But since the fifth is the most consonant interval (apart from the octave), it turns out that notes with close harmonic labels tend to sound consonant together. So it makes sense that the major scale, which consists of seven notes that sound most consonant together, are also the ones that have consecutive harmonic labels.
  Similarly, the pentatonic scale consists of $5$ consecutive numbers, being even more consonant. 

  This means, that by memorizing the harmonic labels of the notes, you have also memorized the structure of the major scale in any key. The same applies to the minor scale, since it consists of the same notes as the parallel major scale.  

### Diatonic chords

  Note that the order of the notes of a key on the keyboard is not the same as the order of their harmonic labels. This actually turns out to be an advantage, because the order of the harmonic labels reveals the structure of the diatonic chords in a major key. 
  
  We will investigate this by considering the C-major scale again, and the $7$ consecutive numbers it consists of: $3$ (F), $4$ (C ), $5$ (G), $6$ (D), $7$ (A), $8$ (E) and $9$ (B), you can see that the diatonic chords of the first three notes ($3$, $4$ and $5$) are major chords. The diatonic chords of the next three are minor ($6$, $7$, $8$), and the last note forms a diminished chord ($9$). 

  The "main" major chord of the key, the tonic chord / $I$ chord, has the root not with harmonic label $4$, which in the middle between the other major chords ($3$ and $5$). We will call this chord the $T$ chord (for tonic), and the other two major chords $T-$ and $T+$. In classical music theory these are referred to as the subdominant ($T-$, in this case $3$ / F) and the dominant 99

### Chord progressions
  The new note labels also make it easier to understand chord progressions in many cases. An example is the $ii - V - I$ progression, which is considered the most fundamental chord progression in Jazz music. It might seem a bit arbitrary at first, but it turns out to be a sequence of chords descending in fifths and ending on the tonic chord. This means that in the new system the progression are just three consecutive (descending) numbers. For example, in the key of C major, it is given by $6 - 5 - 4$. 