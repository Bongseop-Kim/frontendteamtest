# 2023-elice-algorithm-study
엘리스 SW 엔지니어 트랙 4기 코딩테스트 대비 알고리즘 1차 스터디 (2023.03.13 ~ 2023.04.13)

notion: https://www.notion.so/elice/1-73717f2ee9d445b9b3e9cb04a34884e7?p=3bd0aba4006b4c378c4442a89305ff81&pm=c

## 진행 시각

- `23.03.13 (월) ~ 23.04.13 (월)` 진행기간 동안 진행됨.
- 문제 PR 마감: `매주 토요일 23:59:59`
- 코드리뷰 마감: `매주 월요일 23:59:59`

## 진행 목표

- 기업 코딩테스트에서 요구하는 알고리즘들을 익힌다.
- 알고리즘들을 실전 문제에 적용하여 경험을 쌓는다.
- 다양한 코드들을 리뷰해주면서 수많은 풀이법을 공부하여 시야를 확장시킨다.

## 진행 방법

- **매주 화요일에 과제로 백준, 프로그래머스 중에서 3~4문제**들이 주어집니다.
    - 과제 문제는 주차가 진행될수록 난이도가 증가하며, 더 많은 알고리즘의 문제들이 제공됩니다.
    - 과제 난이도는 초기에는 `solvedac 기준 브론즈 중위 ~ 실버 하위 (프로그래머스 lv1)` 에서, 마무리 때에는 `solvedac 기준 골드 하위 ~ 골드 중상위 (프로그래머스 lv3)` 까지 진행될 수 있습니다.
    - **알고리즘 수업 및 토론은 공식적으로는 진행되지 않습니다.** 다만, 과제를 제출하기 위해서는 그 알고리즘에 대한 이해는 있도록 문제를 구성할 것입니다. 스스로 또는 크루들과 함께 알고리즘을 공부하고 과제를 진행합시다.
- 문제를 풀고 해당 주차에 PR을 제출합니다. 기한은 `화요일 ~ 토요일`입니다.
- PR을 제출한 후, 본인이 리뷰해주어야 하는 다른 PR들을 리뷰해줍니다. 기한은 `화요일 ~ 차주 월요일`입니다.

(진행 방법은 https://github.com/kth990303/BojCodingTestStudy 와 유사하게 진행되므로 참고하실 분은 들어가보시면 좋을 것 같습니다)

## 벌금

- 문제 PR을 제 시간 내에 제출하지 않은 경우: `벌금 10,000원`
- 화요일 0시 기준으로 merge가 불가능한 PR: **해당 PR 리뷰를 하지 않은 리뷰어**가 `벌금 5,000원`

## 깃허브 이용 방법

### 과제 제출방법

1. repository를 `fork` 후, `clone`합니다. (초기 1회만) / 새로운 주차 폴더가 생겼을 경우 clone이 아닌 `pull` 또는 `fetch`을 진행합니다.
2. fork한 저장소의 각 주차에 해당되는 과제 폴더에 소스 코드를 `add`, `commit` 후 `push` 합니다. 파일명은 `문제번호_언어_이름`으로 합니다. ex) `14888_cpp_김태현`
3. PR을 보낸 후, code review를 기다립니다. PR 제목은 `[이름] O주차 과제 제출`로 합니다. ex) `[케이] 2주차 과제 제출`, `[케이]2주차 과제 제출`
4. code Reviewer는 아래 우선순위로 지정합니다.
    1. `동일 언어` PR 제출자
    2. 이전 주에 맡은 PR 제출자와 `다른` PR 제출자
5. `changes requested`일 경우 피드백 반영 후 2, 3번을 반복합니다.
6. `merged`일 경우, 다른 과제를 진행합니다.
