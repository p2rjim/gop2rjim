-- 레쓰고 퍼짐 포트폴리오 데이터베이스 스키마

-- 프로필 (작가 소개)
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url TEXT,
  bio TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 작품 (작품 목록)
CREATE TABLE IF NOT EXISTS works (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  category TEXT CHECK (category IN ('intro', 'output')),
  thumbnail_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 작품 이미지 (복수 이미지)
CREATE TABLE IF NOT EXISTS work_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  work_id UUID REFERENCES works(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  order_index INT DEFAULT 0
);

-- 일러스트
CREATE TABLE IF NOT EXISTS illustrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  category TEXT CHECK (category IN ('creative', 'croquis')),
  thumbnail_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 일러스트 이미지 (복수 이미지)
CREATE TABLE IF NOT EXISTS illustration_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  illustration_id UUID REFERENCES illustrations(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  order_index INT DEFAULT 0
);

-- 그 외 활동
CREATE TABLE IF NOT EXISTS activities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT,
  content TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 댓글 (작품, 일러스트 공통)
CREATE TABLE IF NOT EXISTS comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  target_type TEXT CHECK (target_type IN ('work', 'illustration')),
  target_id UUID NOT NULL,
  author_name TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 기본 프로필 데이터 삽입
INSERT INTO profiles (bio) 
VALUES ('안녕하세요, 레쓰고 퍼짐입니다.')
ON CONFLICT DO NOTHING;

-- 기본 활동 데이터 삽입
INSERT INTO activities (title, content)
VALUES ('환영합니다', '<p>레쓰고 퍼짐의 활동을 소개합니다.</p>')
ON CONFLICT DO NOTHING;
