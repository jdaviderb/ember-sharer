ember-sharer
==============================================================================

ember-sharer is an addon that provides an ember-modifier that setup https://github.com/ellisonleao/sharer.js out of box

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.16 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-sharer
```

Usage
------------------------------------------------------------------------------
this addon just provides a modifier ```{{sharer-init}}``` that initializes the library in the element.

**examples :point_down:** 

<details>
<summary>Facebook</summary>

```hbs
<div
  data-sharer="facebook" 
  data-hashtag="sharerjs"
  data-quote="sharerjs from ember-modifier"
  data-url="https://emberobserver.com/"
  {{sharer-init}}
>
  Hello SharerJS
</div>

```
</details>

<details>
<summary>Twitter</summary>

```hbs
<button 
  class="button" 
  data-sharer="twitter" 
  data-title="Checkout Sharer.js!" 
  data-hashtags="awesome, sharer.js" 
  data-url="https://ellisonleao.github.io/sharer.js/"
  {{sharer-init}}
>
  Share on Twitter
</button>
```
</details>


<details>
<summary>Linkedin</summary>

```hbs
<button 
  class="button" 
  data-sharer="linkedin" 
  data-url="https://ellisonleao.github.io/sharer.js/"
  {{sharer-init}}
>
  Share on Linkedin
</button>

```
</details>

<details>
<summary>Email</summary>

```hbs
<button 
  class="button" 
  data-sharer="email" 
  data-title="Awesome Url" 
  data-url="https://ellisonleao.github.io/sharer.js/" 
  data-subject="Hey! Check out that URL" 
  data-to="some@email.com"
  {{sharer-init}}
>
  Share via Email
</button>


```
</details>

<details>
<summary>WhatsApp</summary>

```hbs
<button 
  class="button" 
  data-sharer="whatsapp" 
  data-title="Checkout Sharer.js!" 
  data-url="https://ellisonleao.github.io/sharer.js/"
  {{sharer-init}}
>
  Share on Whatsapp
</button>

```
</details>

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
