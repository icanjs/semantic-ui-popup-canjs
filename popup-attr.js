import can from 'can';
import $ from 'jquery';
import 'semantic-ui-popup/popup';
import 'semantic-ui-transition/transition';

/**
 * A can.view.attr wrapper around SemanticUI popup. Settings can be defined as "semantic"-prefixed attributes.
 *
 * Note: CSS should be imported separately.
 *
 * Example:
 *    With default settings:
 *    <a class="browse" semantic-popup>Button</a>
 *
 *    With custom settings:
 *    <a class="browse" semantic-popup semantic-inline="true" semantic-on="click" semantic-position="bottom left">
 */
can.view.attr('semantic-popup', function(el, attrData) {
  let options = getConfigFromAttrs(el, 'semantic');
  $(el).popup(options);
});

function getConfigFromAttrs(el, prefix){
  return [].reduce.call(el.attributes, function(acc,a){
    return a.name.substring(0, prefix.length) === prefix && a.value
      ? (acc[a.name.substring(prefix.length + 1)] = getValue(a), acc)
      : acc;
  }, {})
}

// TODO: some settings are not simple strings (e.g. delay is an object, also there are booleans).
function getValue(a){
  return a.value;
}