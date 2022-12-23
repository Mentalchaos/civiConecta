import InstitutionManager from '../institutionManager';

describe('institution manager', () => {
  test('check if a grade does not exist create it', () => {
    const im = new InstitutionManager([]);
    im.saveStudent({ grade: '5to',letter: 'A',name: 'john doe',run: '1-9' });
    expect(im.institution[0].grade).toBe('5to');
    expect(im.institution[0].letters[0].character).toBe('A');
    expect(im.institution[0].letters[0].students[0].name).toBe('john doe');
  });

  test.skip('setting 2 students in the same grade and letter', () => {
    const im = new InstitutionManager([]);
    im.saveStudent({ grade: '5to', letter: 'A', name: 'john doe', run: '28436268-3' });
    im.saveStudent({ grade: '5to', letter: 'A', name: 'JC', run: '42200284-7' });

    expect(im.institution.length).toBe(1);
    expect(im.institution[0].letters.length).toBe(1);
    expect(im.institution[0].letters[0].students.length).toBe(2);
  });

  test.skip('setting 3 students in 2 diff grades and same letter', () => {
    const im = new InstitutionManager([]);
    im.saveStudent({ grade: '6to', letter: 'F', name: 'JT', run: '32863454-6' });
    im.saveStudent({ grade: '5to', letter: 'C', name: 'JC', run: '33797517-8' });
    im.saveStudent({ grade: '6to', letter: 'F', name: 'JP', run: '45493699-k' });

    expect(im.institution.length).toBe(2);
    expect(im.institution[0].letters[0].students[0].name).toBe('JT');
    expect(im.institution[1].letters[0].students[0].name).toBe('JC');
    expect(im.institution[0].letters[0].students[1].name).toBe('JP');
  });
});
