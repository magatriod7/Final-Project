/** @format */

import axios from "axios";

import { all, call, put, takeEvery, fork } from "redux-saga/effects";
import {
  MATCHING_RANDOM_MATCHING_GET_REQUEST,
  MATCHING_RANDOM_MATCHING_GET_FAILURE,
  MATCHING_RANDOM_MATCHING_GET_SUCCESS,
} from "../type";
/** @format */

const axiosmatchingRandomMatchingGetSaga = (action) => {
  return axios.get(`/employee`);
};

function* matchingRandomMatchingGetSaga(action) {
  //   console.log("saga진입");
  try {
    console.log("try");
    const posts = yield call(
      axiosmatchingRandomMatchingGetSaga,
      action.payload
    ); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
    yield console.log(posts.data);
    // yield console.log(action.payload);
    yield put({
      type: MATCHING_RANDOM_MATCHING_GET_SUCCESS,
      payload: { randomMatchingInfo: posts.data },
    }); // 성공 액션 디스패치
  } catch (e) {
    // console.log(e);
    yield put({
      type: MATCHING_RANDOM_MATCHING_GET_FAILURE,
      error: true,
      payload: { errmsg: e },
    }); // 실패 액션 디스패치
  }
}

function* watchMatchingRandomMatchingGet() {
  yield takeEvery(
    MATCHING_RANDOM_MATCHING_GET_REQUEST,
    matchingRandomMatchingGetSaga
  );
}

export function* matchingSaga() {
  yield all([fork(watchMatchingRandomMatchingGet)]);
}
