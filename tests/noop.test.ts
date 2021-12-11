import * as Tape from 'tape'

Tape('noop', (t: Tape.Test): void => {
  t.plan(1)
  t.pass('noop')
})
