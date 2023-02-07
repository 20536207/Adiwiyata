$(() => {
  $('#userauth').dxForm({
    accessKey: undefined,
    activeStateEnabled: false,
    alignItemLabels: true,
    alignItemLabelsInAllGroups: true,
    colCount: 1,
    colCountByScreen: {
      lg: undefined,
      md: undefined,
      sm: undefined,
      xs: undefined
    },
    customizeItem: null,
    disabled: false,
    elementAttr: {},
    focusStateEnabled: false,
    formData: {
      "usercategory": "",
      "username": "",
      "password": ""
    },
    height: undefined,
    hint: undefined,
    hoverStateEnabled: false,
    items: [{
      itemType: 'group',
      caption: 'User Authentication',
      items: [{
        dataField: 'Email',
        validationRules: [{
          type: 'required',
          message: 'Email is required',
        }, {
          type: 'email',
          message: 'Email is invalid',
        }, {
          type: 'async',
          message: 'Email is already registered',
          validationCallback(params) {
            return sendRequest(params.value);
          },
        }],
      }, {
        dataField: 'Password',
        editorOptions: {
          mode: 'password',
        },
        validationRules: [{
          type: 'required',
          message: 'Password is required',
        }],
      }, {
        label: {
          text: 'Confirm Password',
        },
        editorType: 'dxTextBox',
        editorOptions: {
          mode: 'password',
        },
        validationRules: [{
          type: 'required',
          message: 'Confirm Password is required',
        }, {
          type: 'compare',
          message: "'Password' and 'Confirm Password' do not match",
          comparisonTarget() {
            return formWidget.option('formData').Password;
          },
        }],
      }],
    }, {
      itemType: 'button',
      horizontalAlignment: 'left',
      buttonOptions: {
        text: 'Register',
        type: 'success',
        useSubmitBehavior: true,
      },
    }],
    labelLocation: "top",
    labelMode: "floating",
    minColWidth: null,
    onContentReady: null,
    onDisposing: null,
    onEditorEnterKey: null,
    onFieldDataChanged: null,
    onInitialized: null,
    onOptionChanged: null,
    optionalMark: "optional",
    readOnly: false,
    requiredMark: "*",
    requiredMessage: "{0} is required",
    rtlEnabled: false,
    screenByWidth: null,
    scrollingEnabled: false,
    showColonAfterLabel: true,
    showOptionalMark: false,
    showRequiredMark: true,
    showValidationSummary: false,
    tabIndex: 0,
    validationGroup: undefined,
    visible: true,
    width: undefined
  });

  $('#gridContainer').dxDataGrid({
    showBorders: true,
    dataSource: //'https://docs.google.com/file/d/1330o7LBWN3ifQ0qCyxAUJU6BXEV3Cfda/open?',
                //./data/info_pd.json',
                'https://raw.githubusercontent.com/20536207/Adiwiyata/main/data/info_pd.json',
    //columnHidingEnabled: true,
    allowColumnReordering: true,
    allowColumnResizing: true,
    columnResizingMode: 'widget',
    columnAutoWidth: true,
    columnChooser: {
      allowSearch: false,
      //emptyPanelText:"Drag a column here to hide it",
      enabled: true,
      //height:260,
      mode: "select",
      //searchTimeout:500,
      sortOrder: undefined,
      title: "Column Chooser",
      //width:250,
    },
    columnFixing: {
      enabled: true,
    },
    hoverStateEnabled: true,
    paging: {
      pageSize: 10,
    },
    pager: {
      allowedPageSizes: [10, 15, 20, 25, 50, 100, 'all'],
      displayMode: "compact",
      showInfo: true,
      showNavigationButtons: true,
      showPageSizeSelector: true,
      visible: true,
    },
    editing: {
      mode: 'form',
      allowUpdating: false,
      allowAdding: false,
      allowDeleting: false,
    },
    remoteOperations: false,
    sorting: {
      mode: 'multiple',
    },
    //searchPanel: {
    //  visible: true,
    //  highlightCaseSensitive: true,
    //},
    selection: {
      allowSelectAll: true,
      deferred: false,
      mode: "multiple",
      selectAllMode: "allPages",
      showCheckBoxesMode: "click"
    },
    filterRow: { visible: true },
    filterPanel: { visible: true },
    headerFilter: { visible: true },
    //groupPanel: { visible: true },
    grouping: {
      autoExpandAll: false,
    },
    wordWrapEnabled: false,
    columns: ColumnsInfoPD,
    toolbar: undefined
    //{
    //  disabled: false,
    //  items: ToolbarInfoPD,
    //  visible: true,
    //},
  });
});
