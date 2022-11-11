export default {
  api: {
    operationFailed: 'Operation failed',
    errorTip: 'Error Tip',
    successTip: 'Success Tip',
    errorMessage: 'The operation failed, the system is abnormal!',
    timeoutMessage: 'Login timed out, please log in again!',
    apiTimeoutMessage: 'The interface request timed out, please refresh the page and try again!',
    apiRequestFailed: 'The interface request failed, please try again later!',
    networkException: 'network anomaly',
    networkExceptionMsg:
      'Please check if your network connection is normal! The network is abnormal',

    errMsg401: 'Unauthorized request!',
    errMsg403: 'Forbidden request!',
    errMsg404: 'Network request error, the resource was not found!',
    errMsg405: 'Network request error, request method not allowed!',
    errMsg408: 'Network request timed out!',
    errMsg500: 'Server error, please contact the administrator!',
    errMsg501: 'The network is not implemented!',
    errMsg502: 'Network Error!',
    errMsg503: 'The service is unavailable, the server is temporarily overloaded or maintained!',
    errMsg504: 'Network timeout!',
    errMsg505: 'The http version does not support the request!',
  },
  app: {
    logoutTip: 'Reminder',
    logoutMessage: 'Confirm to exit the system?',
    menuLoading: 'Menu loading...',
  },
  errorLog: {
    tableTitle: 'Error log list',
    tableColumnType: 'Type',
    tableColumnDate: 'Time',
    tableColumnFile: 'File',
    tableColumnMsg: 'Error message',
    tableColumnStackMsg: 'Stack info',

    tableActionDesc: 'Details',

    modalTitle: 'Error details',

    fireVueError: 'Fire vue error',
    fireResourceError: 'Fire resource error',
    fireAjaxError: 'Fire ajax error',

    enableMessage: 'Only effective when useErrorHandle=true in `/src/settings/projectSetting.ts`.',
  },
  exception: {
    backLogin: 'Back Login',
    backHome: 'Back Home',
    subTitle403: "Sorry, you don't have access to this page.",
    subTitle404: 'Sorry, the page you visited does not exist.',
    subTitle500: 'Sorry, the server is reporting an error.',
    noDataTitle: 'No data on the current page.',
    networkErrorTitle: 'Network Error',
    networkErrorSubTitle:
      'Sorry，Your network connection has been disconnected, please check your network!',
  },
  lock: {
    unlock: 'Click to unlock',
    alert: 'Lock screen password error',
    backToLogin: 'Back to login',
    entry: 'Enter the system',
    placeholder: 'Please enter the lock screen password or user password',
  },
  login: {
    backSignIn: 'Back sign in',
    mobileSignInFormTitle: 'Mobile sign in',
    qrSignInFormTitle: 'Qr code sign in',
    signInFormTitle: 'Sign in',
    signUpFormTitle: 'Sign up',
    forgetFormTitle: 'Reset password',
    googleBindFormTitle: 'Bind Google Authenticator',
    googleVerifyFormTitle: 'Google verification code',

    signInTitle: 'Backstage management system',
    signInDesc: 'Enter your personal details and get started!',
    policy: 'I agree to the xxx Privacy Policy',
    scanSign: `Scanning the code to complete the login`,
    googleScan: `Use Google Authenticator to scan the code to bind`,
    scanAndInputCode: `Use Google Authenticator to scan the code and fill in the verification code`,

    loginButton: 'Sign in',
    bindButton: 'Bind',
    verifyButton: 'Verify',
    registerButton: 'Sign up',
    rememberMe: 'Remember me',
    forgetPassword: 'Forget Password?',
    otherSignIn: 'Sign in with',

    // notify
    loginSuccessTitle: 'Login successful',
    loginSuccessDesc: 'Welcome back',

    // placeholder
    accountPlaceholder: 'Please input username',
    googleCodePlaceholder: 'Please input google verification code',
    passwordPlaceholder: 'Please input password',
    smsPlaceholder: 'Please input sms code',
    mobilePlaceholder: 'Please input mobile',
    policyPlaceholder: 'Register after checking',
    diffPwd: 'The two passwords are inconsistent',

    userName: 'Account',
    password: 'Password',
    oldPassword: 'Old Password',
    newPassword: 'New Password',
    confirmPassword: 'Confirm Password',
    email: 'Email',
    smsCode: 'SMS Code',
    mobile: 'Mobile',
    googleCode: 'Google Verification Code',
  },
  menu: {
    title: 'Menu List',
    name: 'Menu Name',
    icon: 'Menu Icon',
    routePath: 'Route Path',
    target: 'Open',
    type: 'Menu Type',
    sort: 'Sort',
    scope: 'Scope',
    permission: 'Permission',
    create: 'Create Menu',
    update: 'Edit Menu',
    delete: 'The child nodes will be deleted together, are you sure you want to delete?',
    parent: 'Parent Menu',
  },
  codegen: {
    tableName: 'Table Name',
    menuName: 'Menu Name',
    moduleName: 'Module Name',
    functionName: 'Function Name',
    className: 'Class Name',
    template: 'Template',
    generate: 'Generate',
    batchGenerate: 'Batch Generate',
  },
  user: {
    title: 'User List',
    unlock: 'Unlock',
    unlockMethod: 'Unlock Method',
    unlockSuccess: 'Unlock Successful',
    ip: 'IP Address',
    username: 'Account',
    avatar: 'Avatar',
    name: 'Name',
    mobile: 'Mobile',
    email: 'Email',
    role: 'Role',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    deptName: 'Department',
    googleSecret: 'Google Secret',
    detail: 'User Detail',
    google: {
      title: 'Google Secret',
      bound: 'Bound',
      unbound: 'Unbound',
      openVerify: 'Enable verification',
      closeVerify: 'Disable verification',
      reset: 'Reset Secret',
      openMessage: 'Verification On',
      closeMessage: 'Verification Off',
    },
  },
  role: {
    title: 'Role List',
    assign: 'Assign',
    remove: 'Remove',
  },
  dept: {
    title: 'Department List',
  },
};
