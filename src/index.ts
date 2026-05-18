/**
 * @amlplugins/groq-audio
 *
 * Thin namespaced re-export of the native groq-sdk SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Groq Audio — Whisper Large v3 transcription/translation and PlayAI TTS at high throughput.
 */

import * as _sdk from "groq-sdk";
export * from "groq-sdk";
export { _sdk as sdk };
export default _sdk;
