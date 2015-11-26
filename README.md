# react-tasks

Simple React to-do list.

## Development Setup

Assuming you have `npm`, first install the Babel CLI:

```
npm install --global babel-cli
```

Then install the React preset for Babel:

```
npm install babel-preset-react
```

Now run

```
babel --presets react src/ --out-dir lib/
```

to compile, or use `./init-watch` to start watching (auto-compile on change).
