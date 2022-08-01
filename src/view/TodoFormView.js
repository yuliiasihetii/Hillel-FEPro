class TodosFormView {
    static FORM_TEMPLATE = `<form id="addTaskForm">
   <div class="row">
    <div class="ten columns">
        <input
            type="text"
            name="title"
            id="taskNameInput"
            class="u-full-width"
        />
        <span id="errorContainer" class="error hidden"></span>
    </div>
    <div class="two columns">
        <button type="submit" id="addBtn" class="btn">
            Add
        </button>
    </div>
    </div>
  </form>`;

    static TASK_NAME_SELECTOR = '#taskNameInput';

    constructor(config) {
        this._config = config;
        this.$el = $(TodosFormView.FORM_TEMPLATE).on('submit', (e) =>
            this.onFormSubmit(e));
    }

    onFormSubmit(e) {
        e.preventDefault();

        let taskName = this.$el.find(TodosFormView.TASK_NAME_SELECTOR).val();

        this._config.onAdd && this._config.onAdd({ title: taskName });

        this.$el.trigger('reset');
    }
}

