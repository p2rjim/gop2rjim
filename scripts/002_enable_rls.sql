-- RLS 정책 설정
-- 모든 테이블: SELECT는 누구나 가능 (공개 포트폴리오)
-- comments: INSERT도 누구나 가능 (방명록 성격)

-- profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "profiles_select_all" ON profiles FOR SELECT USING (true);
CREATE POLICY "profiles_insert_all" ON profiles FOR INSERT WITH CHECK (true);
CREATE POLICY "profiles_update_all" ON profiles FOR UPDATE USING (true);
CREATE POLICY "profiles_delete_all" ON profiles FOR DELETE USING (true);

-- works
ALTER TABLE works ENABLE ROW LEVEL SECURITY;
CREATE POLICY "works_select_all" ON works FOR SELECT USING (true);
CREATE POLICY "works_insert_all" ON works FOR INSERT WITH CHECK (true);
CREATE POLICY "works_update_all" ON works FOR UPDATE USING (true);
CREATE POLICY "works_delete_all" ON works FOR DELETE USING (true);

-- work_images
ALTER TABLE work_images ENABLE ROW LEVEL SECURITY;
CREATE POLICY "work_images_select_all" ON work_images FOR SELECT USING (true);
CREATE POLICY "work_images_insert_all" ON work_images FOR INSERT WITH CHECK (true);
CREATE POLICY "work_images_update_all" ON work_images FOR UPDATE USING (true);
CREATE POLICY "work_images_delete_all" ON work_images FOR DELETE USING (true);

-- illustrations
ALTER TABLE illustrations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "illustrations_select_all" ON illustrations FOR SELECT USING (true);
CREATE POLICY "illustrations_insert_all" ON illustrations FOR INSERT WITH CHECK (true);
CREATE POLICY "illustrations_update_all" ON illustrations FOR UPDATE USING (true);
CREATE POLICY "illustrations_delete_all" ON illustrations FOR DELETE USING (true);

-- illustration_images
ALTER TABLE illustration_images ENABLE ROW LEVEL SECURITY;
CREATE POLICY "illustration_images_select_all" ON illustration_images FOR SELECT USING (true);
CREATE POLICY "illustration_images_insert_all" ON illustration_images FOR INSERT WITH CHECK (true);
CREATE POLICY "illustration_images_update_all" ON illustration_images FOR UPDATE USING (true);
CREATE POLICY "illustration_images_delete_all" ON illustration_images FOR DELETE USING (true);

-- activities
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;
CREATE POLICY "activities_select_all" ON activities FOR SELECT USING (true);
CREATE POLICY "activities_insert_all" ON activities FOR INSERT WITH CHECK (true);
CREATE POLICY "activities_update_all" ON activities FOR UPDATE USING (true);
CREATE POLICY "activities_delete_all" ON activities FOR DELETE USING (true);

-- comments (누구나 댓글 작성 가능)
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "comments_select_all" ON comments FOR SELECT USING (true);
CREATE POLICY "comments_insert_all" ON comments FOR INSERT WITH CHECK (true);
CREATE POLICY "comments_update_all" ON comments FOR UPDATE USING (true);
CREATE POLICY "comments_delete_all" ON comments FOR DELETE USING (true);
