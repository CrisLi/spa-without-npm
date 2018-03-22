
<nav-bar class="level">
  <div class="level-left">
    <div class="level-item">
      <h4 class="title is-4">Riot App</h4>
    </div>
  </div>
  <div class="level-right">
    <div class="level-item">
      <a href="../" class="button is-info">Back</a>
    </div>
  </div>
</nav-bar>

<message>
  <div if={opts.message} class="notification is-primary">
    {opts.message}
  </div>
  <script>
    this.on('mount', function() {
      console.log(opts);
    });
  </script>
</message>

<message-input class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Message: </label>
  </div>
  <div class="field-body">
    <input class="input" name="message" />
  </div>
  <script>
    this.on('mount', function() {
      console.log(opts);
    });
  </script>
</message-input>

<app>
  <section class="section">
    <div class="container">
      <nav-bar></nav-bar>
      <div class="columns">
        <div class="column is-4">
          <message-input onkeyup={handleChange}></message-input>
          <message message={message}></message>
        </div>
      </div>
    </div>
  </section>
  <script>

    this.message = '';

    this.on('mount', function() {
      console.log('app tag mount');
    });

    handleChange(e) {
      this.message = e.target.value;
    };

  </script>
</app>
