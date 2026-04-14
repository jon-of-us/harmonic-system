

# The Harmonic Sytem

  The Harmonic System is a new way to think about music theory. It makes analyzing, transcribing and understanding harmony easier. Its simple to use and can be seen as a replacement for Roman Numeral Analysis.

  Although its not required to know a lot about music theory to use the Harmonic System, this article aims to explain the system for people who already have a basic understanding of music theory. 

### How does it work?
  The idea is to use numbers as names for the notes, instead of the traditional letters (C, C#, D, D#...) or syllables (do, re, mi, ...). Each note is assigned a number from $0$ to $11$ in the following way: 

  <img src="scripts/piano-octave.svg" alt="Piano octave with new note labels" width="400">

  *Piano octave with new note labels*

  Note that the notes are not labeled in order. Instead two notes which are $7$ semitones (one fifth) apart, always have labels differing by $1$. For example, $C$ and $G$ are a fifth apart, and their labels are $4$ and $5$. Lets call these labels "harmonic labels".

  Another observation we can make is that that going up by $2$ semitones corresponds to adding $2$ to the harmonic label. This nice "coincidence" makes learning the new note labels easier. 

  To use the system effectively, you need to memorize the new note labels. But it will pay off, because the new labels reveal the underlying harmonic structure of music. 
  Now lets see how this system simplifies traditional music theory concepts. 

### Circle of fifths

  The concept of ordering the notes in steps of fifths is not new at all. In fact, the circle of fifths is a well-known concept in music theory. The way we label the notes in the Harmonic System turns the circle of fifths into a simple circle of numbers like a clock.

  <img src="scripts/circle-of-fifths.svg" alt="Circle of fifths with new note labels" width="500">

  *The circle of fifth turns into a simple clock of numbers with the new note labels*

  This means by memorizing the harmonic labels, you have also memorized the circle of fifths! 

### The major scale

  When learning about music theory, it was very unclear to me why the major scale has the specific pattern of whole and half steps that it has. (whole, whole, half, whole, whole, whole, half). Why not a different pattern? 

  It turns out that this gets much clearer in the Harmonic System. 
  As an example, consider the C-major scale, consisting of the notes C, D, E, F, G, A and B which have the new labels $4$, $6$, $8$, $3$, $5$, $7$ and $9$ respectively. 
  These are actually just $7$ **consecutive numbers** from $3$ to $9$! The pattern of whole and half steps in the major scale is just a consequence of the fact that the harmonic labels of the notes in the major scale are consecutive numbers. Similarly, any other major scale also consists of $7$ consecutive numbers. The root note, in this case C $= 4$, is always the second number in the sequence.

  This observation maybe clarifies a bit, why labelling the notes in steps of fifths is so useful. The major scale was not explicitly designed to have this nice property - its just notes that sound good together. 
  But since the fifth is the most consonant interval (apart from the octave), it turns out that notes with close harmonic labels tend to sound consonant together. So it makes sense that the major scale, which consists of seven notes that sound most consonant together, are also the ones that have consecutive harmonic labels.
  Similarly, the pentatonic scale consists of $5$ consecutive numbers, being even more consonant. 

  This means, that by memorizing the harmonic labels of the notes, you have also memorized the structure of the major scale in any key. The same applies to the minor scale, since it consists of the same notes as the parallel major scale.  

### Diatonic chords

  Note that the order of the notes of a key on the keyboard is not the same as the order of their harmonic labels. This actually turns out to be an advantage, because the order of the harmonic labels reveals the structure of the diatonic chords in a major key.

  *The diatonic chords of a major key are the chords only consisting of notes from the major scale. They "naturally" belong to the key, and are the most commonly used chords in that key.*
  
  We will investigate this by considering the key of C-major again, and the $7$ consecutive number the C-major scale consists of: $3$ (F), $4$ (C ), $5$ (G), $6$ (D), $7$ (A), $8$ (E) and $9$ (B), you can see that the diatonic chords of the first three notes ($3$, $4$ and $5$) are major chords. The diatonic chords of the next three are minor ($6$, $7$, $8$), and the last note forms a diminished chord ($9$). 

  **Structure and naming of the diatonic chords**

  The main major chord of the key, the "tonic" chord or "$I$-chord", has the root note with harmonic label $4$, which in the middle between the other major chords ($3$ and $5$). We will call this chord the $T$ chord (for tonic), and the other two major chords $T-$ and $T+$. In classical music theory these are referred to as the subdominant ($T-$, in this case $3$ / F) and the dominant ($T+$, in this case $5$ / G) chord. Similarly, the main minor chord, the "parallel minor", or "$vi$-chord", has the root note with harmonic label $7$(A), which is in the middle between the other minor chords ($6$ and $8$). We will call this chord the $M$ chord (for parallel *minor* or sub*mediant*), and the other two minor chords $M-$ and $M+$. 

  *This naming is intended to be used for both major and minor keys. In a minor key, the main minor chord (the tonic) is still called the $M$ chord, and $T$ refers to its parallel major chord. Effectively major and (natural) minor keys are not distinguished.*

### Chord progressions
  The new note labels also make it easier to understand chord progressions in many cases. An example is the $ii - V - I$ progression, which is considered the most fundamental chord progression in Jazz music. It might seem a bit arbitrary at first, but it turns out to be a sequence of chords descending in fifths and ending on the tonic chord. This means that in the new system the progression are just three consecutive (descending) numbers. For example, in the key of C major, it is given by $6, 5, 4$. 

  This is closely related to the concept of a "(secondary) dominant". A secondary dominant is a chord that is a fifth above the root of another chord. Usually classic or jazz pianists will memorize, for every chord, which secondary dominant belongs to it. In the harmonic system you can easily find the secondary dominant of any chord by just adding $1$ to its harmonic label. 

  To understand the structure of chord progressions, it is useful to express them relative to the position of the key, with the previously introduced naming ($T-$, $T$, $T+$, $M-$, $M$, $M+$). For example, the $ii - V - I$ progression can be expressed as $M-\; T+\; T$. This makes it easy to transpose the progression to any key: 
  If you want to play in the key of $1$-major (E$\flat$-major) for example, you first find out what $T$ is in that key, which is $1$ (E$\flat$), and what $M$ is, which is $4$ (always $T + 3$). Then you can easily find the other chords in the progression by subtracting or adding $1$ to the harmonic labels. In this case: 
  $$
  \begin{align*}
    & ii - V - I \\
    & M-,\; T+,\; T \\
    & 3,\; 2,\; 1
  \end{align*}$$


### Visualizing chords 

  The harmonic system can easily be integrated into traditional chord notation, by just replacing the note names with their harmonic labels, for example:
  $$A♭_\text{maj7} \;\;\; E♭ \;\;\; B♭ \;\;\; G_7  \;\;\;C_\text{m}\;\;\; \rightarrow \;\;\; 0_\text{maj7} \;\;\; 1  \;\;\; 2  \;\;\; 4_7 \;\;\;  3_m$$
  This way, the system can already be used effectively. However, this notation is not optimal. For example in $4_7$, numbers are used both to indicate the root note and the type of the chord, which can be a bit confusing.  

  Therefore, as a supplement to the harmonic system, there is a nice way to visualize chords and chord progressions in a scale. Let's start by considering the notes that make up a major scale displayed in one row. Here we take C-major again as an example.

  <img src="icons/scale.svg" alt="C-major scale" width="250">

  To make it a bit more compact, we remove the last note, and then move 6, 7 and 8 to the next row. This way they are displayed in a grid-like structure, which can be seen as part of an infinite grid of notes, extending in both directions. This grid was already invented 300 years ago by the mathematician Leonhard Euler, and is known as the "Tonnetz". 

  <img src="icons/tonic-grid-extended.svg" alt="C-major scale in two rows" width="280">

  *The C-major scale displayed in a grid structure, which can be seen as part of an infinite grid of notes, known as the "Tonnetz"*  

  Now we can visualize chords by connecting the notes that belong to the chord. Note that a horizontal connection between two notes corresponds to a fifth, a connection diagonally downwards corresponds to a major third, and a connection diagonally upwards corresponds to a minor third. For example, the tonic chord $T$ (C major) consists of the notes $4$(C ), $8$(E) and $5$(G), which form a triangle. For clarity, we will omit the note labels. 

  <img src="icons/c-major.svg" alt="Tonic chord visualized in the grid" width="100">

  Because of the symmetry of the grid, every other major chord also forms a triangle pointing downwards. Minor chords are represented by triangles pointing upwards. We will call these forms the "shape" of the chord. As an example, here are some diatonic chords, displayed at the right position in the grid:

  <img src="icons/diatonic-chords.png" alt="Diatonic chords at their positions in the grid" width="400">

   
  A nice property of this representation is, that for most chords the notes are in the same order on the grid as they are on the keyboard. The leftmost point is the base note. The fastest way to recognize a chord is usually by its shape (which determines the type of the chord) and base note. Here are some other example shapes of common chords. If you play the piano, you can try to find out which ones they are: 

  <img src="icons/chord-shapes.svg" alt="Shapes of common chords" width="220">

  *Some example shapes of common chords* 

  These shapes can either be used instead of traditional chord names like "maj7" or "m7b5" to write chord progressions explicitly in a given key, for example:

  <img src="icons/chord-progression.png" alt="Chord progression written with shapes" width="150">

  Or they can be displayed relative to the key, revealing the structure of the progression, for example:

  <img src="icons/chord-progression-relative.png" alt="Chord progression written with shapes relative to the key" width="150">
