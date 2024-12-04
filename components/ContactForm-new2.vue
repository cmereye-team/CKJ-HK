<script lang="ts" setup>
import service from '~/assets/js/service'
import type { FormInstance, FormRules } from 'element-plus'
import { useAppState } from '~/stores/appState'
const route = useRoute()
const router = useRouter()
const { t } = useLang()
// import { smallPhoneNum } from '~/assets/js/common'
const appState = useAppState()

const props = defineProps({
  service: {
    type: String,
    default: '洗牙', //種植牙
  },
  area: {
    type: String,
    default: '羅湖區',
  },
})
const options = ref([
  {
    value: '羅湖區',
    label: '羅湖區',
  },
  {
    value: '福田區',
    label: '福田區',
  },
  {
    value: '南山區',
    label: '南山區',
  },
  {
    value: '龍華區',
    label: '龍華區',
  },
])

let form: any = reactive({
  name: '',
  // gender: '',
  dayOne: '',
  phone: '',
  area: '羅湖區',
  // email: '',
  service: '',
  explain: '',
  careVoucher: route.path == '/health-care-voucher' ? true : false,
})

const reForm = () => {
  form.value = {
    name: '',
    dayOne: '',
    // gender: '',
    area: '',
    phone: '',
    service: '',
    explain: '',
    careVoucher: route.path == '/health-care-voucher' ? true : false,
  }
}
const cityOptions = service.map((item) => item.name)
const checkboxGroup1 = ref([])
const cities = cityOptions
const checkGroup = () => {
  // 获取当前选中的值的数量
  const selectedValuesLength = checkboxGroup1.value.length
  // 如果选中的值超过4个
  if (selectedValuesLength > 4) {
    // 计算需要移除的值的索引
    const indexToRemove = selectedValuesLength - 4
    // 从选中的值中移除前面的值直到数量不超过4个
    for (let i = 0; i < indexToRemove; i++) {
      checkboxGroup1.value.shift() // shift() 方法用于删除并返回数组的第一个元素
    }
  }
}

const disabledDate = (date: any) => {
  return date && date.valueOf() < Date.now() - 86400000
}

const handleOpen = () => {
  // 时区选择 UTC +8
  const now = new Date()
  now.setHours(9)
  now.setMinutes(0)
  now.setSeconds(0)
  now.setDate(now.getDate() + 1)
  form.dayOne = now
  formLoading.value = false
  form.dayOne = now
  formLoading.value = false
  return
}
const shortcuts = [
  {
    text: '今天',
    value: new Date(),
  },
]

// const timestamp = Date.parse(new Date().toString())

const phoneNumLength = (rule: any, phoneNum: any, callback: any) => {
  if (!phoneNum) {
    return callback(new Error('電話號碼不能爲空'))
  }
  switch (areaCode.value) {
    case '86':
      if (String(phoneNum).length !== 11) {
        return callback(new Error('請輸入正確的電話號碼'))
      }
      break
    case '853':
      if (String(phoneNum).length !== 8) {
        return callback(new Error('請輸入正確的電話號碼'))
      }
      break
    case '852':
      if (String(phoneNum).length !== 8) {
        return callback(new Error('請輸入正確的電話號碼'))
      }
      break
    default:
      return callback(new Error('不支持的區號'))
  }
  callback()
}
const serviceLength = (rule: any, service: any, callback: any) => {
  if (!checkboxGroup1.value.length) {
    return callback(new Error('請選擇服務'))
  }
  if (checkboxGroup1.value.length < 1) {
    return callback(new Error('請選擇服務不少於1個'))
  }
  callback()
}
var valiemail = (rule: any, value: any, callback: any) => {
  const mailReg = /^([a-zA-Z0-9_-_._-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
  if (!value) {
    return callback(new Error('請填寫您的電郵地址'))
    callback()
  }
  setTimeout(() => {
    if (mailReg.test(value.trim())) {
      // this.$refs.ruleForm.validateField('checkemail');
      callback()
    } else {
      callback(new Error('請填寫正確的電郵地址'))
    }
  }, 100)
}
const formLoading = ref(false)
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  name: [{ required: true, message: '請填寫您的姓名', trigger: 'change' }],
  dayOne: [{ required: true, message: '請選擇預約日期', trigger: 'change' }],
  area: [{ required: true, message: '請選擇區域', trigger: 'change' }],
  // gender: [{ required: true, message: '請選擇稱呼', trigger: 'change' }],
  phone: [
    {
      required: true,
      validator: phoneNumLength,
      trigger: 'blur',
    },
  ],
  // email: [{ type: 'email', required: true, validator: valiemail, trigger: 'blur' }],
  service: [
    {
      required: true,
      validator: serviceLength,
      trigger: 'change',
    },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  if (formLoading.value) return
  formLoading.value = true
  await formEl.validate((valid: any, fields: any) => {
    if (valid) {
      if (
        localStorage.getItem('contactForm') &&
        localStorage.getItem('contactForm') === JSON.stringify(form)
      ) {
        ElMessageBox.alert(
          'If you have any questions or inquiries, please contact us via WhatsApp: +(如果您有任何问题或疑问，请通过WhatsApp与我们联系：+)',
          '消息通知',
          {
            confirmButtonText: '好的',
          }
        )
        formLoading.value = false
        return
      }
      if (!privacyPolicy.value) {
        ElMessage({
          showClose: true,
          message: '請勾選同意有關私隱政策聲明。',
          type: 'warning',
        })
        formLoading.value = false
        return
      }
      onSubmit()
    } else {
      console.log('error submit!', fields)
      formLoading.value = false
    }
  })
}

const servicePreferential = [
  {
    name: '洗牙',
    text: `-----\n【备注信息： 洁牙中心诉求 |  告知客人，费用不止88一种，医生视情况确定费用细节，以免与一线人员产生价格误会】\n超聲波洗牙--優惠價：¥88、原價 ¥ -- ；\n菌斑導向專業洗牙（含鹽）--優惠價：¥168、原價 ¥350；\n菌斑導向專業洗牙（無鹽）--價格：¥550；`,
  },
  {
    name: '種植牙',
    text: `春日感謝限定優惠：歐美種植牙 即減￥2,000/顆`,
  },
  {
    name: '矯齒(箍牙)',
    text: `春日感謝限定優惠：即減￥3,000`,
  },
  {
    name: '隱形矯正',
    text: `春日感謝限定優惠：即減￥5,000`,
  },
  {
    name: '兒童牙科',
    text: `-----\n兒童洗牙：¥150；\n兒童補牙：¥500/顆；\n牙齒塗氟：¥200/全口；\n乳齒拔除：¥300/顆；\n窩溝封閉：¥300/顆。`,
  },
  {
    name: '補牙',
    text: `美國樹脂補牙：首颗7折，第二颗起8折(非牙髓治疗，原价300元/颗)`,
  },
  {
    name: '全瓷貼片',
    text: `春日感謝限定優惠：E.MAX￥1,980/顆`,
  },
  {
    name: '牙齒美白',
    text: `藍光美白：￥980/次`,
  },
]

const onSubmit = async () => {
  form.service = checkboxGroup1.value.join(',')
  console.log(form, 'form')
  let _formData = new FormData()
  let _form = form
  _formData.append('contact_name', _form.name)
  // _formData.append('gender', _form.gender)
  _formData.append('phone', `${areaCode.value} ${_form.phone}`)
  _formData.append('dayOne', _form.dayOne)
  _formData.append('area', _form.area)
  _formData.append('careVoucher', _form.careVoucher ? '是' : '否')
  // _formData.append('email',_form.email)
  _formData.append('service', _form.service)
  _formData.append('formUrl', `${location.href}`)
  _formData.append('explain', _form.explain)

  let _preferential = servicePreferential.find(
    (item) => item.name === _form.service
  )
  if (_preferential) {
    _formData.append('preferential', _preferential.text)
    // console.log(_preferential.text)
  } else {
    _formData.append('preferential', `無`)
  }
  const host = ref('https://admin.ckjhk.com/api.php/cms/addform/fcode/3')
  // return
  const { data }: any = await useFetch(host, {
    method: 'post',
    body: _formData,
  })

  let res = JSON.parse(data.value)
  if (res) {
    if (res.code) {
      ElMessage({
        showClose: true,
        message: '表單提交成功！我們會盡快回覆閣下。',
        type: 'success',
        duration: 0,
      })
      localStorage.setItem('contactForm', JSON.stringify(_form))
      reForm()
      router.push({ path: `/messagePage?c=${res.code}` })
    } else {
      ElMessage({
        showClose: true,
        message: res.data,
        type: 'error',
      })
    }
  } else {
    postData(_form, _preferential)
    errorserver(_form, _preferential)
  }
  formLoading.value = false
  appState.setIsShowForm(false)
}

const isCareVoucher = () => {
  if (route.path == '/health-care-voucher') {
    return true
  } else {
    return false
  }
}

const postData = async (_form, _preferential) => {
  let _message = {
    msgtype: 'text',
    text: {
      content: `名称：${_form.name}
  聯繫方式：${areaCode.value} ${_form.phone}
  服務：${_form.service}
  來源：${location.href}
  優惠信息：${_preferential ? _preferential.text : '無'}
  預約日期：${_form.dayOne}
  診症區域：${_form.area}
  使用長者醫療券：${(_form.careVoucher = _form.careVoucher ? '是' : '否')}
  提交時間：${new Date().toLocaleString()}
  备注信息：服务器离线由备用服务推送`,
    },
  }
  let { data }: any = await useFetch(
    '/dingtalk/robot/send?access_token=29f5dd6fd3019078bea0734c5dcfdea2e9b1792e238860a907faf486ae17ba55',
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(_message),
    }
  )
  if (data) {
    localStorage.setItem('contactForm', JSON.stringify(_form))
    reForm()
    window.location.href = `/messagePage`
  } else {
    ElMessage({
      showClose: true,
      message: '服務異常，請稍後重試',
      type: 'error',
    })
  }
}
const errorserver = async (_form, _preferential) => {
  let emailLists = [
    'vikim_lee@outlook.com',
    'jamie_chung@cmermedical.com',
    'info@ckjhk.com',
    'joanna.choi@cmermedical.com',
    'hazel.ho@cmermedical.com',
    '1934019260@qq.com',
  ]
  let _EmailformData: any = []
  for (var i = 0; i < emailLists.length; i++) {
    let _message = {
      to: [
        {
          email: emailLists[i],
        },
      ],
      from: {
        email: 'MS_mCYizS@trial-pq3enl6ymv5g2vwr.mlsender.net',
        name: 'ckjhk.com',
      },
      subject: '来自ckjhk.com的預約表單信息-备用服务',
      html: `<p>名称：${_form.name}</p>
        <p>联系方式：${areaCode.value} ${_form.phone}</p>
        <p>服务：${_form.service}</p>
        <p>来源：${location.href}</p>
        <p>預約日期：${_form.dayOne}</p>
        <p>診症區域：${_form.area}</p>
        <p>使用長者醫療券：${(_form.careVoucher = _form.careVoucher
          ? '是'
          : '否')}</p>
        <p>优惠信息：${_preferential ? _preferential.text : '無'}</p><br/>
        <p>提交時間：${new Date().toLocaleString()}</p>
        <p>备注信息：服务器离线由备用服务推送</p>`,
    }
    _EmailformData.push(_message)
  }
  const { data }: any = await useFetch('/sendmail/v1/bulk-email', {
    method: 'post',
    headers: {
      Authorization:
        'Bearer mlsn.af3269665a0933f2eb9ec9cbf7d1aca61448d23387c688190873b6e3fa19274c',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(_EmailformData),
  })
}

const serviceLists = service.map((item) => item.name)

let windowWidth = ref(1920)

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  form.service = props.service
  form.service = props.service
  getWindowWidth()
  window.addEventListener('resize', getWindowWidth)
})

let areaCode = ref('852')
let privacyPolicy = ref(true)
</script>

<template>
  <div class="contactForm">
    <div id="contactUsFormNav"></div>
    <div class="contactForm-bg">
      <div class="contactForm-title">
        <span>立即預約牙科診症</span>
        <span>（星期一至日 9:00am – 6:30pm）</span>
      </div>
      <div class="contactForm-in">
        <el-form
          ref="ruleFormRef"
          :model="form"
          :rules="rules"
          label-width="120px"
          label-position="top"
        >
          <!-- <div class="firstFormItem"> -->
          <!-- <el-col :span="11"> -->
          <el-form-item
            :label="`${$t('contactUs.contact_form.formItem.name')}`"
            prop="name"
          >
            <el-input
              v-model="form.name"
              name="name"
              placeholder="姓名"
              maxlength="30"
            />
          </el-form-item>
          <el-form-item label="預約日期" prop="dayOne">
            <el-date-picker
              v-model="form.dayOne"
              type="date"
              popper-class="date-picker-class"
              placeholder="請選擇"
              :disabled-date="disabledDate"
              :shortcuts="shortcuts"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
              :editable="false"
              @handleOpen="handleOpen"
            />
          </el-form-item>
          <!-- </el-col> -->
          <!-- <el-col :span="2"></el-col> -->
          <!-- <el-col :span="9">
              <el-form-item
                :label="`${$t('contactUs.contact_form.formItem.gender')}`"
                prop="gender"
              >
                <el-select
                  v-model="form.gender"
                  :placeholder="'請選擇'"
                >
                  <el-option label="先生" value="先生" />
                  <el-option label="女士" value="女士" />
                  <el-option label="小姐" value="小姐" />
                </el-select>
              </el-form-item>
            </el-col> -->
          <!-- </div> -->

          <!-- <el-form-item :label="`${$t('contactUs.contact_form.formItem.email_address')}：`" prop="email">
            <el-input v-model="form.email" />
          </el-form-item> -->
          <el-form-item :label="`診症服務`" prop="service" label-width="100%">
            <span class="service_explain"></span>
            <!-- <FormCheckboxGroup /> -->
            <div class="checkboxGroup">
              <el-checkbox-group v-model="checkboxGroup1" @change="checkGroup">
                <el-checkbox-button
                  v-for="city in cities"
                  :label="$t(city)"
                  :key="$t(city)"
                  >{{ $t(city) }}</el-checkbox-button
                >
              </el-checkbox-group>
            </div>
          </el-form-item>
          <el-form-item label="診症區域" prop="area">
            <el-select v-model="form.area" placeholder="請選擇">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item
            :label="`${$t('contactUs.contact_form.formItem.telephone_number')}`"
            prop="phone"
          >
            <div class="phone_input">
              <el-select
                class="areaCode type_number"
                v-model="areaCode"
                placeholder="請選擇"
              >
                <el-option label="+852" value="852" />
                <el-option label="+853" value="853" />
                <el-option label="+86" value="86" />
              </el-select>
              <el-input
                v-model.number="form.phone"
                type="number"
                maxlength="12"
              />
            </div>
          </el-form-item>
          <el-form-item
            :label="`${$t('contactUs.contact_form.formItem.explain')}`"
            prop="explain"
          >
            <el-input
              v-model="form.explain"
              placeholder="歡迎填寫"
              name="name"
              maxlength="30"
            />
          </el-form-item>
          <el-form-item>
            <div class="explain_item">
              <div class="care_voucher">
                <label for="care_title">使用長者醫療券</label>
                <input
                  type="checkbox"
                  value="true"
                  id="care_title"
                  v-model="form.careVoucher"
                />
              </div>
              <div class="privacyPolicy-label">*為必填</div>
            </div>
          </el-form-item>
          <el-form-item>
            <div class="privacyPolicy">
              <div
                class="privacyPolicy-content"
                @click.stop="privacyPolicy = !privacyPolicy"
              >
                <span>我們將會在10小時內與您聯絡確認預約詳情。</span>
                <span class="radio">
                  <div :class="['radio-in', { act: privacyPolicy }]"></div>
                  <div>
                    <i>*</i>本人已閱讀並同意有關
                    <nuxt-link to="/privacyPolicy?from=2" target="_blank"
                      >私隱政策</nuxt-link
                    >
                    聲明。
                  </div>
                </span>
              </div>
            </div>
          </el-form-item>
          <el-form-item>
            <div class="formBtn contactUsForm">
              <div class="animbtntypetwo contactUsForm" v-loading="formLoading">
                <div
                  class="animbtntypetwo-in contactUsForm"
                  :id="windowWidth > 768 ? 'contactUsForm' : 'navMbContactForm'"
                  @click.stop="submitForm(ruleFormRef)"
                >
                  <span class="contactUsForm">
                    <img
                      class="contactUsForm"
                      src="@/assets/images/icon_36.svg"
                      style="margin-right: 10px"
                      alt=""
                    />
                    {{ $t('contactUs.contact_form.formItem.submit_the_form') }}
                  </span>
                </div>
              </div>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
ul {
  &.el-select-dropdown__list {
    padding: 0;
  }
}
.el-scrollbar__bar.is-vertical {
  width: 15px;
  .el-scrollbar__thumb {
    background-color: var(--indexColor);
  }
}
.el-popper__arrow {
  display: none;
}
.el-select__popper.el-popper {
  border: 2px solid var(--indexColor1);
  border-radius: 0;
}
.date-picker-class {
  .el-date-picker {
    width: 322px !important;
    padding-bottom: 30px;
  }
  .el-picker-panel__sidebar + .el-picker-panel__body {
    margin-left: 0;
  }
  .el-picker-panel__sidebar {
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    background-color: var(--el-bg-color-overlay);
    overflow: auto;
    top: auto;
    width: 100%;
    border-top: 1px solid var(--el-datepicker-inner-border-color);
    padding: 6px 10px 6px;
  }

  .el-date-table {
    .el-date-table__row {
      td {
        & > div:hover {
          color: #fc1682;
          text-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.5);
        }
      }
      .today {
        span {
          border: 1px solid #fc1682;
          border-radius: 50%;
          color: #313336;
        }
      }
    }
  }
  .el-picker-panel__shortcut:hover {
    color: #fc1682;
  }
}
.el-select-dropdown {
  max-width: 388.5px;
  min-width: 386px !important;
}
.el-picker-panel {
  .el-date-picker__header {
    & > span:nth-child(1) {
      & > button:first-child {
        display: none;
      }
    }
    & > span:last-child {
      & > button:last-child {
        display: none;
      }
    }
  }
}
#el-id-1024-8 {
  width: 155px;
  .el-select-dropdown {
    min-width: 145px !important;
  }
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
}
@media screen and (max-width: 768px) {
  .el-select-dropdown {
    max-width: 95.5px;
    min-width: 80.5px !important;
    .el-select-dropdown__item {
      padding-left: 11px;
      padding-right: 12px;
    }
  }
  #el-id-1024-8 {
    width: 83px;
    .el-select-dropdown {
      min-width: 82px !important;
    }
    .el-select-dropdown__item {
      padding-left: 11px;
      padding-right: 12px;
    }
  }
}
</style>
<style lang="scss" scoped>
:deep(.el-form) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0px 15px;
  // & > div:nth-child(1) {
  //   width: calc(1.8 / 3 * 100%);
  // }
  // & > div:nth-child(2) {
  //   width: calc(1 / 3 * 100%);
  // }
  & > div:nth-child(2) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        width: 100%;
        & > div:nth-child(1) {
          height: 51px;
          width: 100%;
        }
      }
    }
  }
  & > div:nth-child(3) {
    position: relative;
    .service_explain {
      position: absolute;
      top: -45px;
      left: 15%;
      color: var(--Grey-Deep, #4d4d4d);
      font-family: FakePearl;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 35.2px */
    }
  }
  & > div:nth-child(3),
  & > div:nth-child(6),
  & > div:nth-child(7),
  & > div:nth-child(8),
  & > div:nth-child(9) {
    // 独占一行
    grid-column: 1 / 3;
  }
}
.checkboxGroup {
  :deep(.el-checkbox-button) {
    & > span {
      border-radius: 43px !important;
      border: 2px solid var(--Pink-Pale, #fee6f1) !important;
      background: var(--White, #fff);
      color: var(--Grey-Deep, #4d4d4d);
      text-align: center;
      font-family: FakePearl;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 160%; /* 38.4px */
      overflow: hidden;
      margin: 5px 8px;
      padding: 8px 15px;
    }
  }
  :deep(.el-checkbox-button.is-checked) {
    & > span {
      border-radius: 40px !important;
      border: 2px solid var(--Theme-Color, #fc1682) !important;
      background: var(--Theme-Color, #fc1682);
      color: var(--White, #fff);
      text-align: center;
      font-family: FakePearl;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 160%; /* 38.4px */
      margin: 5px 8px;
      padding: 8px 15px;
      position: relative;
      overflow: hidden;
    }
    & > span::before {
      content: '';
      position: absolute;
      background: url('https://static.cmereye.com/imgs/2024/10/bf3ad20161919c12.png')
        no-repeat;
      background-size: 100% 100%;
      right: 0;
      bottom: 0;
      z-index: 3;
      width: 46px;
      height: 28px;
      border: 0px;
    }
  }
  :deep(.is-focus) {
    & > span {
      border-radius: 40px !important;
      border: 2px solid var(--Pink-Pale, #fee6f1) !important;
      background: var(--White, #fff);
      color: var(--Grey-Deep, #4d4d4d);
      overflow: hidden;
    }
  }
}
.phone_input {
  display: flex;
  border: 2px solid var(--indexColor1);
  line-height: 30px;
  :deep(.el-input) {
    border: none !important;
    box-shadow: none !important;
    height: 51px !important;
  }
  :deep(.el-input .is-focus) {
    border: none !important;
    box-shadow: none !important;
  }
  & > div:nth-child(1) {
    flex: 4;
  }
  & > div:nth-child(2) {
    flex: 6;
  }
}

li {
  &.el-select-dropdown__item {
    color: var(--indexColor1);
    height: 55px;
    line-height: 55px;
    font-size: 28px;
    letter-spacing: 7px;
    &:hover {
      background: #dde2ea;
    }
    &.selected {
      background: #dde2ea;
      font-weight: 500;
    }
  }
}
.contactForm {
  position: relative;
  margin-top: 54px;
  &-bg {
    position: relative;
    padding: 71px 0 75px;
    // background: linear-gradient(
    //   270deg,
    //   rgba(255, 241, 240, 0) 2.6%,
    //   rgba(255, 241, 240, 0.7) 23.89%,
    //   rgba(255, 241, 240, 0.7) 75.33%,
    //   rgba(255, 241, 240, 0) 97.4%
    // );
    background: url('https://static.cmereye.com/imgs/2024/10/b248f2c5945aad87.png')
      no-repeat;
    background-position: center center;
    background-size: cover;
  }
  &-title {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    span {
      font-style: normal;
      &:first-child {
        font-weight: 600;
        font-size: 35px;
        color: var(--indexColor1);
      }
      &:last-child {
        font-weight: 400;
        font-size: 30px;
        color: #808080;
      }
    }
  }
  &-in {
    width: calc(100% - 60px);
    max-width: 1050px;
    margin: 50px auto 0;
    .firstFormItem {
      display: flex;
      flex-wrap: wrap;
    }
    :deep(.el-form-item) {
      margin-bottom: 30px;
    }
    :deep(.el-form-item__label) {
      font-family: var(--contextFamily);
      font-style: normal;
      font-weight: 500;
      font-size: 28px;
      line-height: 160% !important;
      color: var(--indexColor1);
      letter-spacing: 5px;
      &::before {
        display: none;
      }
      &::after {
        content: '*';
      }
    }
    :deep(.el-select) {
      width: 100%;
      --el-select-input-focus-border-color: var(--indexColor1);
      --el-select-border-color-hover: var(--indexColor1);
      .el-input {
        &.is-focus {
          .el-input__wrapper {
            background: var(--indexColor1);
            .el-input__inner {
              color: #fff;
            }
          }
        }
      }
    }
    :deep(.el-input) {
      height: 55px;
      font-size: 28px;
      border: 2px solid var(--indexColor1);
      --el-input-border-color: var(--indexColor1);
      --el-input-focus-border-color: var(--indexColor1);
      --el-input-focus-border: var(--indexColor1);
      --el-input-hover-border-color: var(--indexColor1);
      --el-input-clear-hover-color: var(--indexColor1);
      --el-input-border-radius: 0;
      .el-input__wrapper {
        box-shadow: none;
      }
      &.is-focus {
        .el-input__inner {
          &::placeholder {
            color: #fff;
          }
        }
      }
    }
    :deep(.el-input__inner) {
      font-size: 28px;
      line-height: 50px;
      height: 50px;
      text-indent: 10px;
      // color: var(--indexColor1);
      color: #4d4d4d;
      &::placeholder {
        color: #4d4d4d;
      }
    }
    :deep(.el-form-item:nth-child(6)) {
      .el-form-item__label::after {
        content: none !important;
      }
    }
    :deep(.el-form-item__content) {
      display: flex;
      flex-wrap: nowrap;
      & > .areaCode {
        width: 210px;
        margin-right: 30px;
      }
    }
    :deep(.el-form-item__error) {
      font-size: 20px;
    }
    :deep(.el-select-dropdown__item) {
      font-size: 28px;
      color: var(--indexColor1);
      height: 55px;
      line-height: 55px;
    }
    :deep(.el-radio-group) {
      width: 100%;
      justify-content: space-between;
    }
    :deep(.el-radio) {
      --el-radio-input-border-color-hover: var(--indexColor1);
    }
    :deep(.el-radio__input.is-checked .el-radio__inner) {
      border: 1px solid #cbcbcb;
      background: #fff;
    }
    :deep(.el-radio__inner::after) {
      width: 100%;
      height: 100%;
      background: var(--indexColor1);
      border: 1px solid #fff;
    }
    .radio {
      display: flex;
      align-items: center;
      margin-top: 5px;
      cursor: pointer;
      &-in {
        border-radius: 50%;
        border: 2px solid var(--indexColor1);
        background: #fff;
        width: 20px;
        height: 20px;
        margin-right: 10px;
        margin-top: -2px;
        position: relative;
        &::before {
          content: '';
          width: 0;
          height: 0;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: var(--indexColor1);
          transition: all 0.3s;
          border-radius: 50%;
        }
        &.act {
          &::before {
            width: 12px;
            height: 12px;
          }
        }
      }
    }
    :deep(.el-select .el-input .el-select__caret) {
      font-size: 28px;
      color: var(--indexColor1);
      &.is-reverse {
        color: #fff;
      }
    }
    .service_explain::after {
      content: '最多4項';
    }
    .formBtn {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .privacyPolicy {
      width: 100%;
      &-label {
        font-size: 16px;
        color: var(--indexColor1);
      }
      &-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #808080;
        font-weight: 400;
        line-height: 160%; /* 41.6px */
        letter-spacing: 5.2px;
        font-size: 16px;
        margin-top: 20px;
        a {
          color: #00aeff;
          text-decoration-line: underline;
        }
        i {
          font-style: normal;
          color: var(--indexColor1);
          font-size: 20px;
        }
        :deep(.el-radio.el-radio--large .el-radio__label) {
          font-size: 16px;
          color: #808080;
        }
        :deep(.el-radio.el-radio--large .el-radio__inner) {
          width: 26px;
          height: 26px;
        }
        :deep(.el-radio__inner) {
          border-width: 2px;
          border-color: var(--indexColor1);
        }
      }
    }
    .explain_item {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    .care_voucher {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      gap: 0 5px;
      & > label {
        color: #00a752;
        font-family: FakePearl;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 24px */
        font-weight: 500;
        font-size: 28px;
        letter-spacing: 5px;
      }
      & > input:checked {
        content: '';
        color: #fff;
        background-color: #fc1682;
        -webkit-appearance: none;
        // background: url('../assets/images/check3078.svg') no-repeat;
        border-radius: 50%;
        // background-position: 0px 0px;
        border: 3px solid #fc1682;
        // border-radius: 0;
        display: inline-block;
        text-align: center;
        // background-size: contain;
        width: 26px;
        height: 26px;
        transition: all 0.1s ease-in;
      }
      & > input:checked::after {
        content: '';
        color: #fff;
        background-color: #fc1682;
        -webkit-appearance: none;
        border-radius: 50%;
        display: inline-block;
        border: 3px solid #ffffff;
        text-align: center;
        background-size: contain;
        width: 20px;
        height: 20px;
        transition: all 0.1s ease-in;
        position: absolute;
        z-index: 5;
        left: 0px;
        top: 0px;
      }

      & > input {
        position: relative;
        // background-color: #fff;
        -webkit-appearance: none;
        border: 2px solid #fc1682;
        // background: url('../assets/images/boxpink.svg') no-repeat;
        border-radius: 50%;
        // background-position: 0px 0px;
        // border-radius: 0;
        outline: none;
        width: 26px;
        height: 26px;
        transition: all 0.1s ease-in;
      }
    }
  }
}
#contactUsFormNav {
  position: absolute;
  top: -8vh;
}
.contactForm-title > span:nth-child(1) {
  position: relative;
}
.contactForm-title > span:nth-child(1)::after {
  content: '';
  background: url('https://static.cmereye.com/imgs/2024/07/d4f4313d9bdb6405.png')
    no-repeat;
  width: 98px;
  height: 40px;
  display: inline-block;
  position: absolute;
  top: -30px;
  right: -40px;
}
.contactForm-title > span:nth-child(1)::before {
  content: '真人客服回覆';
  display: inline-block;
  position: absolute;
  top: -28px;
  right: -28px;
  color: var(--White, #fff);
  text-align: center;
  z-index: 1;
  font-family: FakePearl;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 19.2px */
  letter-spacing: 1.2px;
}

@media (min-width: 768px) and (max-width: 1920px) {
  li {
    &.el-select-dropdown__item {
      height: 2.8646vw;
      line-height: 2.8646vw;
      font-size: 1.4583vw;
      letter-spacing: 0.3646vw;
    }
  }
  :deep(.el-form) {
    &
      > div:nth-child(2)
      > div:nth-child(2)
      > div:nth-child(1)
      > div:nth-child(1) {
      height: 2.60415vw;
      width: 100%;
    }
    & > div:nth-child(3) {
      position: relative;
      .service_explain {
        position: absolute;
        top: -2.275vw;
        left: 15%;
        color: var(--Grey-Deep, #4d4d4d);
        font-family: FakePearl;
        font-size: 1.0458vw;
        line-height: 160%; /* 35.2px */
        font-style: normal;
        font-weight: 400;
      }
    }

    & > div:nth-child(1) {
      position: relative;
      width: 100%;
      max-width: 42.665vw;
    }
    & > div:nth-child(2) {
      position: relative;
      width: 100%;
      max-width: 36.4vw;
      right: 0;

      .el-input__suffix {
        display: none !important;
      }
    }

    & > div:nth-child(4) {
      // max-width: 24vw;
      width: 100%;
    }

    .el-input__wrapper {
      padding: 1px 0.5723vw;
    }
  }
  .checkboxGroup {
    :deep(.el-checkbox-button) {
      & > span {
        border-radius: 43px !important;
        border: 2px solid var(--Pink-Pale, #fee6f1) !important;
        background: var(--White, #fff);
        color: var(--Grey-Deep, #4d4d4d);
        text-align: center;
        font-family: FakePearl;
        font-style: normal;
        font-weight: 500;
        line-height: 1.8646vw;
        letter-spacing: 0.0646vw;
        font-size: 1.4583vw;
        margin: 0.26vw 0.4165vw;
        padding: 0.4165vw 0.78125vw;
        overflow: hidden;
      }
    }
    :deep(.el-checkbox-button.is-checked) {
      & > span {
        border-radius: 40px !important;
        border: 2px solid var(--Theme-Color, #fc1682) !important;
        background: var(--Theme-Color, #fc1682);
        color: var(--White, #fff);
        text-align: center;
        font-family: FakePearl;
        font-style: normal;
        font-weight: 500;
        line-height: 1.8646vw;
        font-size: 1.4583vw;
        letter-spacing: 0.0646vw;
        margin: 0.26vw 0.4165vw;
        padding: 0.4165vw 0.78125vw;
        position: relative;
        overflow: hidden;
      }
      & > span::before {
        content: '';
        position: absolute;
        background: url('https://static.cmereye.com/imgs/2024/10/bf3ad20161919c12.png')
          no-repeat;
        background-size: 100% 100%;
        right: 0;
        bottom: 0;
        z-index: 3;
        width: 2.3958vw;
        height: 1.4583vw;
        border: 0px;
      }
    }
    :deep(.is-focus) {
      & > span {
        border-radius: 40px !important;
        border: 2px solid var(--Pink-Pale, #fee6f1) !important;
        background: var(--White, #fff);
        color: var(--Grey-Deep, #4d4d4d);
        overflow: hidden;
      }
    }
  }

  .contactForm {
    margin-top: 2.8125vw;
    &-bg {
      padding: 3.6979vw 0 3.9063vw;
    }
    &-title {
      span {
        &:first-child {
          font-size: 1.8229vw;
        }
        &:last-child {
          font-size: 1.5625vw;
        }
      }
    }
    &-in {
      width: calc(100% - 3.125vw);
      max-width: 54.6857vw;
      margin: 2.6042vw auto 0;
      :deep(.el-form-item) {
        margin-bottom: 1.5625vw;
      }
      :deep(.el-form-item__label) {
        font-size: 1.4583vw;
        letter-spacing: 0.2604vw;
      }
      :deep(.el-input) {
        height: 2.8646vw;
        font-size: 1.4583vw;
        overflow: hidden;
        background: #fff;
      }
      :deep(.el-input__inner) {
        font-size: 1.4583vw;
        line-height: 2vw;
        height: 2vw;
        text-indent: 0.5208vw;
      }
      :deep(.el-form-item__content) {
        & > .areaCode {
          width: 12vw;
          margin-right: 1.5625vw;
        }
      }
      :deep(.el-form-item__error) {
        font-size: 1.0417vw;
      }
      :deep(.el-select-dropdown__item) {
        font-size: 1.4583vw;
        height: 2.8646vw;
        line-height: 2.8646vw;
      }
      :deep(.el-select .el-input .el-select__caret) {
        font-size: 1.4583vw;
      }
      .care_voucher {
        & > label {
          font-size: 1.4583vw;
          letter-spacing: 0.2604vw;
        }
        & > input:checked {
          width: 1.354vw;
          height: 1.354vw;
        }
        & > input:checked::after {
          width: 1.004vw;
          height: 1.004vw;
          border: 2px solid #ffffff;
        }
        & > input {
          width: 1.354vw;
          height: 1.354vw;
        }
      }

      .privacyPolicy {
        margin-top: 1.5625vw;
        &-label {
          font-size: 0.8333vw;
        }
        &-content {
          letter-spacing: 0.2708vw;
          font-size: 0.8333vw;
          margin-top: 1.0417vw;
          :deep(.el-radio.el-radio--large .el-radio__label) {
            font-size: 0.8333vw;
          }
          :deep(.el-radio.el-radio--large .el-radio__inner) {
            width: 1.3542vw;
            height: 1.3542vw;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  li {
    &.el-select-dropdown__item {
      height: 26px;
      line-height: 26px;
      font-size: 15px;
      letter-spacing: 3px;
    }
  }
  .contactForm {
    width: 100%;
    &-bg {
      padding: 70px 0 50px;
      // background: #fff;
      background: url('https://static.cmereye.com/imgs/2024/10/58f8e580415873fd.png')
        no-repeat;
      background-position: center center;
      background-size: cover;
    }
    span {
      // &:first-child {
      //   font-size: 16px;
      // }
      // &:last-child {
      //   font-weight: 500;
      //   font-size: 20px;
      // }
    }
    &-title {
      padding: 0 30px;
      span {
        letter-spacing: 3px;
        &:first-child {
          font-size: 26px;
          font-weight: 500;
        }
        &:last-child {
          font-size: 15px;
        }
      }
    }
    &-in {
      margin: 21px auto 0;
      position: relative;
      :deep(.el-form-item__error) {
        font-size: 12px;
      }
      :deep(.el-input) {
        height: 28px;
        font-size: 15px;
        border: 2px solid var(--indexColor1);
      }
      :deep(.el-input__inner) {
        font-size: 15px;
        height: 24px;
        line-height: 24px;
        text-indent: 0;
      }
      :deep(.el-form-item__content) {
        & > .areaCode {
          width: 120px;
          margin-right: 10px;
        }
      }
      :deep(.el-select .el-input .el-select__caret) {
        font-size: 15px;
      }
      :deep(.el-form-item) {
        margin-bottom: 10px;
      }
      :deep(.el-form-item__label) {
        font-size: 16px;
        letter-spacing: 3px;
      }
      :deep(
          .el-form--default.el-form--label-top
            .el-form-item
            .el-form-item__label
        ) {
        margin-bottom: 3px;
      }
      :deep(.el-radio__label) {
        font-size: 16px;
      }
      .formBtn {
        // width: 137px;
        // height: 40px;
        // font-size: 16px;
        margin: 12px auto 0;
      }
      .privacyPolicy {
        margin-top: 0px;
        &-label {
          font-size: 12px;
        }
        &-content {
          font-size: 12px;
          line-height: 1.2;
          letter-spacing: 2.4px;
          margin-top: 10px;
          i {
            font-size: 16px;
          }
          :deep(.el-radio.el-radio--large .el-radio__label) {
            font-size: 12px;
          }
          :deep(.el-radio.el-radio--large .el-radio__inner) {
            width: 16px;
            height: 16px;
          }
          :deep(.el-radio.el-radio--large) {
            height: 20px;
          }
        }
      }
    }
  }
}

.animbtntypetwo {
  position: relative;
  display: flex;
  &-in {
    position: relative;
    display: inline-block;
    & > span {
      padding: 20px 50px;
      color: #fff;
      background: #00aeff;
      position: relative;
      z-index: 1;
      border-radius: 50px;
      display: inline-block;
      animation: btntestAnima 5.6s infinite;
      box-shadow: 10px 10px 20px rgba(103, 214, 239, 0.75);
      cursor: pointer;
      transition: all 0.5s;
      font-size: 30px;
      display: flex;
      align-items: center;
    }
    &::after {
      content: '';
      position: absolute;
      display: inline-block;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      width: 90%;
      height: 90%;
      border: 10px solid #b9d9fc;
      z-index: 0;
      border-radius: 70px;
      animation: btntestafterAnima 5.6s infinite;
      transition: all 0.5s;
    }
    &:hover {
      & > span {
        background: #ff9900;
        box-shadow: 10px 10px 20px rgba(239, 176, 103, 0.75);
        animation: btntesthoverAnima 5.6s infinite;
      }
      &::after {
        border: 10px solid #fcd1b9;
        animation: btntestafterhoverAnima 5.6s infinite;
      }
    }
  }
}
@keyframes btntestAnima {
  5% {
    transform: scale(0.95);
    -webkit-transform: scale(0.95);
  }
  8% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
@keyframes btntesthoverAnima {
  5% {
    transform: scale(0.95);
    -webkit-transform: scale(0.95);
  }
  8% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
@keyframes btntestafterAnima {
  0% {
    width: 90%;
    height: 90%;
    border: 10px solid #b9d9fc;
  }
  19% {
    border: 10px solid rgba(185, 217, 252, 0.5);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  24% {
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  29% {
    border: 0 solid rgba(185, 217, 252, 0);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  100% {
    border: 0 solid rgba(185, 217, 252, 0);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
}
@keyframes btntestafterhoverAnima {
  0% {
    width: 90%;
    height: 90%;
    border: 10px solid #fcd1b9;
  }
  19% {
    border: 10px solid rgba(252, 209, 185, 0.5);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  24% {
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  29% {
    border: 0 solid rgba(252, 209, 185, 0);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  100% {
    border: 0 solid rgba(252, 209, 185, 0);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
}
@media (min-width: 769px) and (max-width: 1600px) {
  .animbtntypetwo {
    &-in {
      & > span {
        font-size: 2vw;
        padding: 1vw 2.5vw;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .animbtntypetwo {
    &-in {
      & > span {
        font-size: 20px;
        padding: 8px 30px;
        img {
          width: 20px;
        }
      }
      &::after {
        border: 7px solid #b9d9fc;
      }
      &.smallmb {
        & > span {
          font-size: 16px;
          padding: 5px 20px;
        }
      }
    }
  }
  @keyframes btntestafterAnima {
    0% {
      width: 90%;
      height: 90%;
      border: 7px solid #b9d9fc;
    }
    19% {
      border: 7px solid rgba(185, 217, 252, 0.5);
      width: calc(100% + 28px);
      height: calc(100% + 28px);
    }
    24% {
      width: calc(100% + 28px);
      height: calc(100% + 28px);
    }
    29% {
      border: 0 solid rgba(185, 217, 252, 0);
      width: calc(100% + 28px);
      height: calc(100% + 28px);
    }
    100% {
      border: 0 solid rgba(185, 217, 252, 0);
      width: calc(100% + 28px);
      height: calc(100% + 28px);
    }
  }
  @keyframes btntestafterhoverAnima {
    0% {
      width: 90%;
      height: 90%;
      border: 7px solid #fcd1b9;
    }
    19% {
      border: 7px solid rgba(252, 209, 185, 0.5);
      width: calc(100% + 28px);
      height: calc(100% + 28px);
    }
    24% {
      width: calc(100% + 28px);
      height: calc(100% + 28px);
    }
    29% {
      border: 0 solid rgba(252, 209, 185, 0);
      width: calc(100% + 28px);
      height: calc(100% + 28px);
    }
    100% {
      border: 0 solid rgba(252, 209, 185, 0);
      width: calc(100% + 28px);
      height: calc(100% + 28px);
    }
  }
  :deep(.el-form) {
    position: relative;
    max-width: 100%;
    & > div:nth-child(2) {
      & > div:nth-child(2) {
        & > div:nth-child(1) {
          width: 100%;
          & > div:nth-child(1) {
            height: 21px;
          }
        }
      }
    }
    & > div:nth-child(1) {
      position: absolute;
      left: 0;
      width: 41vw;
    }
    & > div:nth-child(2) {
      position: absolute;
      width: 41vw;
      right: 0;

      .el-input__suffix {
        display: none !important;
      }
    }
    & > div:nth-child(3) {
      position: relative;
      margin-top: 18vw;
      margin-bottom: 15vw;
      .service_explain {
        position: absolute;
        top: -5.075vw;
        left: 25%;
        color: var(--Grey-Deep, #4d4d4d);
        font-family: FakePearl;
        font-size: 2.665vw;
        line-height: 160%; /* 35.2px */
        font-style: normal;
        font-weight: 400;
      }
    }
    & > div:nth-child(4) {
      position: absolute;
      left: 0;
      width: 25vw;
      top: 62vw;
    }
    & > div:nth-child(5) {
      width: 57vw;
      position: absolute;
      right: 0;
      top: 62vw;
    }
    & > div:nth-child(6) {
      margin-top: 4vw;
    }
  }
  .phone_input {
    :deep(.el-input){
      height: 24px !important;
    }
  }
  .checkboxGroup {
    :deep(.el-checkbox-button) {
      & > span {
        border-radius: 11.465vw !important;
        border: 0.53vw solid var(--Pink-Pale, #fee6f1) !important;
        background: var(--White, #fff);
        color: var(--Grey-Deep, #4d4d4d);
        text-align: center;
        font-family: FakePearl;
        font-size: 3.2vw;
        font-style: normal;
        font-weight: 500;
        line-height: 120%; /* 19.2px */
        letter-spacing: 0.32vw;
        margin: 1.13vw 1vw 0 0;
        padding: 1.433vw 2.4665vw;
        overflow: hidden;
      }
    }
    :deep(.el-checkbox-button.is-checked) {
      & > span {
        border-radius: 10.65vw !important;
        border: 0.53vw solid var(--Theme-Color, #fc1682) !important;
        background: var(--Theme-Color, #fc1682);
        color: var(--White, #fff);
        text-align: center;
        font-family: FakePearl;
        font-size: 3.2vw;
        font-style: normal;
        font-weight: 500;
        line-height: 120%; /* 19.2px */
        letter-spacing: 0.32vw;
        margin: 1.13vw 1vw 0 0;
        padding: 1.433vw 2.4665vw;
        position: relative;
        overflow: hidden;
      }
      & > span::before {
        content: '';
        position: absolute;
        background: url('https://static.cmereye.com/imgs/2024/10/bf3ad20161919c12.png')
          no-repeat;
        background-size: 100% 100%;
        right: 0;
        bottom: 0;
        z-index: 3;
        width: 6.0958vw;
        height: 4.0583vw;
        border: 0px;
      }
    }
    :deep(.is-focus) {
      & > span {
        border-radius: 10.65vw !important;
        border: 0.563vw solid var(--Pink-Pale, #fee6f1) !important;
        background: var(--White, #fff);
        color: var(--Grey-Deep, #4d4d4d);
        overflow: hidden;
      }
    }
  }

  .contactForm {
    &-in {
      :deep(.el-form-item__label) {
        font-size: 3.73vw;
        letter-spacing: 0.8vw;
      }
      :deep(.el-input__inner) {
        font-size: 3.73vw;
        font-weight: 400;
        line-height: 160%; /* 24px */
        letter-spacing: 0.4vw;
      }
      :deep(.el-input__wrapper) {
        padding: 1px 1.665vw;
      }
      :deep(.el-input__suffix) {
        width: 20%;
        & > .el-input__suffix-inner {
          width: 100%;
        }
      }
    }
    .care_voucher {
      & > label {
        font-size: 5.33vw;
        line-height: 160%;
      }
      & > input:checked {
        width: 4.2vw;
        height: 4.2vw;
      }
      & > input:checked::after {
        width: 2.8vw;
        height: 2.8vw;
        border: 2px solid #ffffff;
      }
      & > input {
        width: 4.2vw;
        height: 4.2vw;
      }
    }
  }
}
</style>

