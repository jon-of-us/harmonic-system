# The Harmonic System

The Harmonic System is a new way to think about music theory. By replacing traditional note names with numbers that reflect harmonic relationships, it makes analyzing, transcribing, and understanding harmony significantly easier. It can be seen as a more intuitive and consistent alternative to Roman Numeral Analysis.

Although you don't need much music theory knowledge to use the Harmonic System, this article is written for readers who already have a basic understanding of concepts like scales, chords, and intervals.

### How does it work?

The core idea is simple: instead of naming notes with letters (C, C#, D, …) or syllables (do, re, mi, …), we assign each note a number from $0$ to $11$. We call these **harmonic labels**. The labeling follows one rule: two notes that are a perfect fifth (7 semitones) apart always have labels that differ by 1. For example, C and G are a fifth apart, so their labels are $4$ and $5$.

<img src="scripts/piano-octave.svg" alt="Piano octave with harmonic labels" width="400">

*Piano octave with harmonic labels*

A useful consequence of this rule is that going up by a whole step (2 semitones) corresponds to adding $2$ to the label — for instance, C is $4$ and D is $6$. This makes the labels easy to remember and work with. 

To use the system effectively, you need to memorize the harmonic labels. But it will pay off, because they reveal the underlying structure of music. Now let’s see how this system simplifies traditional music theory concepts.

### Circle of fifths

Ordering notes by fifths is nothing new — the circle of fifths has been a fundamental concept of music theory for centuries. What changes with harmonic labels is that the circle of fifths becomes a simple number circle, like a clock:

<img src="scripts/circle-of-fifths.svg" alt="Circle of fifths with harmonic labels" width="500">

*With harmonic labels, the circle of fifths becomes a simple clock of numbers*

In other words, by memorizing the harmonic labels you automatically memorize the circle of fifths.

### The major scale

When learning about music theory, it was very unclear to me why the major scale has the specific pattern of whole and half steps that it does (W W H W W W H). Why not a different pattern?

It turns out that this gets much clearer in the Harmonic System.
As an example, consider the C-major scale: C, D, E, F, G, A and B. Their harmonic labels are $4$, $6$, $8$, $3$, $5$, $7$, $9$ respectively.
These are actually just $7$ **consecutive numbers** from $3$ to $9$! The pattern of whole and half steps is just a side effect of picking seven consecutive harmonic labels. 

Similarly, any other major scale also consists of $7$ consecutive harmonic labels (consecutive on the clock). The root note of the scale is the second-lowest number in this sequence.

This observation maybe clarifies a bit, why labelling the notes in steps of fifths is so useful. The major scale was not explicitly designed to have this nice property - its just notes that sound good together.
But since the fifth is the most consonant interval (apart from the octave), it turns out that notes with close harmonic labels tend to sound consonant together. So it makes sense that the major scale, which consists of seven notes that sound most consonant together, are also the ones that have consecutive harmonic labels.
Similarly, the pentatonic scale consists of $5$ consecutive numbers, being even more consonant.

This means, that by memorizing the harmonic labels of the notes, you have also memorized the structure of the major scale in any key. The same applies to the minor scale, since it consists of the same notes as the parallel major scale.

### Diatonic chords
Note that the order of the notes of a key on the keyboard is not the same as the order of their harmonic labels. This actually turns out to be an advantage, because the order of the harmonic labels reveals the structure of the diatonic chords in a major key: They directly show the chord types.

*The diatonic chords of a major key are the chords only consisting of notes from the major scale. They "naturally" belong to the key, and are the most commonly used chords in that key.*

Staying with C-major and its labels $3$ (F), $4$ (C ), $5$ (G), $6$ (D), $7$ (A), $8$ (E) and $9$ (B): 
- The diatonic chords of the first three notes ($3$, $4$ and $5$) are **major** chords.
- The diatonic chords of the next three are **minor** ($6$, $7$, $8$)
- The last note forms a **diminished** chord ($9$)

**Naming the diatonic chords**

The main major chord of the key, the "tonic" chord or "$I$-chord", has the root note with harmonic label $4$, which in the middle between the other major chords ($3$ and $5$). We will call this chord the $T$ chord (for tonic). The other two major chords are named relative to it:
*   **T**: The tonic chord ($I$). In C-major, this is C ($4$).
*   **T-**: The subdominant chord ($IV$). In C-major: F ($3$).
*   **T+**: The dominant chord ($V$). In C-major: G ($5$).

Similarly, the main minor chord, the "parallel minor", or "$vi$-chord", has the root note with harmonic label $7$(A), which is in the middle between the other minor chords ($6$ and $8$). We will call this chord the $M$ chord (for parallel *minor* or sub*mediant*). The other two minor chords are named relative to it:
*   **M**: The relative minor chord ($vi$). In C-major: Am ($7$).
*   **M-**: The supertonic chord ($ii$). In C-major: Dm ($6$).
*   **M+**: The mediant chord ($iii$). In C-major: Em ($8$).

*This naming is intended to be used for both major and minor keys. In a minor key, the main minor chord (the tonic) is still called the $M$ chord, and $T$ refers to its parallel major chord. Effectively major and (natural) minor keys are not distinguished.*

### Chord progressions

Harmonic labels also clarify how chord progressions work. Take the ii–V–I progression, the most fundamental progression in jazz. It can look arbitrary at first, but it is simply three chords descending by fifths — which, in harmonic labels, means three consecutive descending numbers. In C-major: $6, 5, 4$ (Dm → G → C).

This connects directly to the concept of **secondary dominants**: the secondary dominant of any chord is just the chord whose root is one label higher. In the Harmonic System, finding a secondary dominant means adding $1$.
### Chord progressions

Harmonic labels also clarify how chord progressions work. Take the ii–V–I progression, the most fundamental progression in jazz. It can look arbitrary at first, but it is simply three chords descending by fifths — which, in harmonic labels, means three consecutive descending numbers. In C-major: $6, 5, 4$ (Dm → G → C).

This connects directly to the concept of **secondary dominants**: the secondary dominant of any chord is just the chord whose root is one label higher. In the Harmonic System, finding a secondary dominant means adding $1$.

**Transposing with the T / M naming**

Expressing a progression in terms of T and M makes transposition trivial. The ii–V–I becomes:

$$M-,\; T+,\; T$$

To play this in, say, E♭-major (harmonic label $1$):
1. T = $1$ (E♭).
2. M = T + 3 = $4$ (C). *(This is always the case.)*
3. Fill in the progression: M− = $3$, T+ = $2$, T = $1$.

$$
\begin{align*}
  & ii - V - I \\
  & M-,\; T+,\; T \\
  & 3,\; 2,\; 1
\end{align*}
$$

### Visualizing chords

The Harmonic System can be used with standard chord notation by simply substituting harmonic labels for note names:

$$A♭_\text{maj7} \;\;\; E♭ \;\;\; B♭ \;\;\; G_7 \;\;\; C_\text{m} \;\;\;\rightarrow\;\;\; 0_\text{maj7} \;\;\; 1 \;\;\; 2 \;\;\; 4_7 \;\;\; 3_\text{m}$$

This already works well, but the notation $4_7$ uses numbers for both the root and the chord type, which can cause confusion. A visual notation solves this.

**From scale to grid**

Start by laying out the notes of a major scale in a row. Here is C-major:

<img src="icons/scale.svg" alt="C-major scale" width="250">

Now fold the row: keep $3, 4, 5$ on top and move $6, 7, 8$ to a second row below. The result is a compact grid that is actually a fragment of the **Tonnetz**, a note grid invented by Leonhard Euler nearly 300 years ago.

<img src="icons/tonic-grid-extended.svg" alt="C-major scale in two rows" width="280">

*The C-major scale arranged on a fragment of the Tonnetz*

In this grid, a horizontal connection is a **fifth**, a diagonal connection going down-right is a **major third**, and a diagonal connection going up-right is a **minor third**. This means every type of interval — and therefore every chord — has a distinctive **shape** on the grid.

**Chord shapes**

We can visualize a chord by connecting its notes on the grid. For example, the tonic chord T (C-major: notes $4$, $8$, $5$) forms a downward-pointing triangle. For clarity we omit the note labels:

<img src="icons/c-major.svg" alt="Tonic chord visualized in the grid" width="100">

By the symmetry of the grid, every major chord is a downward triangle and every minor chord is an upward triangle. Here are the diatonic chords at their positions in the grid:

<img src="icons/diatonic-chords.png" alt="Diatonic chords at their positions in the grid" width="400">

A useful property: for most chords the left-to-right order on the grid matches the low-to-high order on the keyboard, with the leftmost point being the root. Recognizing a chord comes down to spotting its shape (which tells you the chord type) and its position (which tells you the root).

Here are some shapes of other common chords — if you play piano, see if you can identify them:

<img src="icons/chord-shapes.svg" alt="Shapes of common chords" width="220">

*Shapes of some common chord types*

**Using shapes in notation**

Chord shapes can replace traditional chord-type suffixes like "maj7" or "m7b5". A progression can be written with shapes placed at absolute positions in a key:

<img src="icons/chord-progression.png" alt="Chord progression written with shapes" width="150">

Or at positions relative to the key, revealing the structural pattern of the progression:

<img src="icons/chord-progression-relative.png" alt="Chord progression written with shapes relative to the key" width="150">

### Conclusion

The Harmonic System replaces note names with numbers that reflect fifths-based relationships, turning the circle of fifths into a clock, major scales into consecutive runs, and chord functions into simple arithmetic. Combined with the Tonnetz-based visual notation for chord shapes, it provides a practical toolkit for analyzing, transposing, and composing music. Try assigning harmonic labels to a piece you know well — the patterns will start jumping out immediately.
