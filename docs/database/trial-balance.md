# TrialBalance

| Column Name | Data Type | Constraints | Description |
|-------------|-----------|-------------|-------------|
| id          | number    | Primary Key | Unique auto-generated identifier for each trial balance |
| uuid        | string    | Nullable    | UUID for each trial balance |
| accountingYear | number | Required | The year the trial balance relates to |
| records     | JSON      | Nullable, Default: Empty JSON array | An array of transaction records |
| operation   | string    | Default: '' | The operation type of trial balance e.g. Normal, Initiate, Close Down |
| directors   | JSON      | Default: Empty JSON object | An object of trial balance directors |
| currentPeriod   | JSON      | Default: Empty JSON object | An object of the current period of trial balance |
| previousPeriod   | JSON      | Default: Empty JSON object | An object of the previous period of trial balance |
| approvalDate   | Date      | Nullable    | The date of trial balance approval |
| taxRate   | double      | Nullable    | Tax rate of trial balance |
| additionalInfos   | JSON      | Default: Empty JSON object | An object of additional information related to trial balance |
| remarkConfigs   | JSON      | Default: Empty JSON object | An object of remark configurations related to trial balance |
| createdAt   | Date      | Required    | The date a trial balance is created |
| updatedAt   | Date      | Required    | The date a trial balance is last updated |
